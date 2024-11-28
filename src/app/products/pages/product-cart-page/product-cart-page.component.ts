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
}
