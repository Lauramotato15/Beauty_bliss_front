import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../interface/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-catalog-page',
  templateUrl: './product-catalog-page.component.html',
  styleUrl: './product-catalog-page.component.css'
})
export class ProductCatalogPageComponent implements OnInit, OnDestroy{
  public subAll?:Subscription;
  public products:Product[] = []; 


  constructor(private serviceProduct: ProductService){}

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

  findbyName(value:string){
    this.serviceProduct.findProducts(value).subscribe(product => {
      if(product.success){
        this.products.splice(0, this.products.length, product.data);
      }
      
      if(!product.success){
        this.allProducts(); 
      }
    })
  }

  delete(id:number){
    this.serviceProduct.deleteProducts(id).subscribe(resp => {
      if(resp){
        this.products = this.products.filter(product => product.id !== id);
      }
    });
  }

  ngOnDestroy(): void {
    this.subAll?.unsubscribe; 
  }
}
