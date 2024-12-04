import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../interface/product.interface';
import { ProductService } from '../../services/product.service';
import { AuthService } from '../../../auth/services/auth.service';
import { FormControl, FormGroup, Validators as val } from '@angular/forms';


@Component({
  selector: 'product-catalog-page',
  templateUrl: './product-catalog-page.component.html',
  styleUrl: './product-catalog-page.component.css'
})
export class ProductCatalogPageComponent implements OnInit, OnDestroy{

  public subAll?:Subscription;
  public subSearch?:Subscription; 
  public subDrop?:Subscription;
  
  public formCategory = new FormGroup({
    category: new FormControl('', [val.required])
  })

  public products:Product[] = []; 
  private shoppingCart:Product[] = [];

  constructor(
    private serviceProduct: ProductService,
    private serviceAuth:AuthService,
  ){}

  ngOnInit(): void {
    this.allProducts();
  }

  allProducts(){
    this.subAll = this.serviceProduct.getAllProducts().subscribe(products => {
      if(products.data){
        this.products = products.data; 
      }
    })
  }

  searchbyName(value:string){
    this.subSearch = this.serviceProduct.findProducts(value).subscribe(product => {
      if(product.success){
        this.products.splice(0, this.products.length, product.data); 
      }
      
      if(!product.success){
        this.allProducts(); 
      }
    })
  }

  addCartSale(product: Product) {
    let currentCart: Product[] = this.serviceAuth.loadLocalStorage< Array <Product>>('cart'); // Asegúrate de que sea un arreglo
    
    if(currentCart.length){
      if (Array.isArray(currentCart[0])) {
        currentCart = currentCart.flat(); // Aplanamos la estructura para que todos los productos estén en un solo arreglo
      }

      currentCart.push(product);
      this.serviceAuth.saveLocalStorage<Array<Product>>('cart', currentCart);
      this.shoppingCart = currentCart;
      
    }else{
      this.shoppingCart.push(product);
      this.serviceAuth.saveLocalStorage<Array<Product>>('cart', this.shoppingCart);
    }
    
  }
  
  deleteProduct(id:number){
    this.subDrop = this.serviceProduct.deleteProducts(id).subscribe(resp => {
      if(resp){
        this.products = this.products.filter(product => product.id !== id);
      }
    });
  }

  ngOnDestroy(): void {
    this.subAll?.unsubscribe(); 
    this.subSearch?.unsubscribe(); 
    this.subDrop?.unsubscribe(); 
  }

  get categoryFormControl(){
    return this.formCategory.controls['category'] as FormControl;
  }
}
