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

  constructor(private readonly serviceAuth:AuthService){}

  ngOnInit(): void {
    this.products = this.serviceAuth.loadLocalStorage<Array<Product>>('cart');
  }

  get total(){
    return this.products.reduce((acum, product) => {
    const quantity = product.quantity ?? 0;
      console.log({quantity, price: +product.price}, quantity * (+product.price))
      return acum + (quantity * +product.price);
    }, 0);
  }

}
