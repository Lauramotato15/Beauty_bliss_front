import { Component, Input } from '@angular/core';
import { Product } from '../../interface/product.interface';

@Component({
  selector: 'card-cart',
  templateUrl: './card-product-cart.component.html',
  styleUrl: './card-product-cart.component.css',
})
export class CardProductCartComponent {

  @Input() public product!:Product; 
}
