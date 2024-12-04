import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Product } from '../../interface/product.interface';

@Component({
  selector: 'product-cart-page',
  templateUrl: './product-cart-page.component.html',
  styleUrl: './product-cart-page.component.css'
})
export class ProductCartPageComponent implements OnInit{
  
  public products: Product[] = [];
  public total!:number;

  constructor(private readonly serviceAuth:AuthService){}

  ngOnInit(): void {
    this.products = this.serviceAuth.loadLocalStorage<Array<Product>>('cart');
    const total:number = this.products.reduce((acum, product) => {
      return acum + (product.quantity * product.price);
    }, 0);
    
    console.log("soy total",total);
  }
}
