import { Component, Input } from '@angular/core';
import { Product } from '../../interface/product.interface';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'card-cart',
  templateUrl: './card-product-cart.component.html',
  styleUrl: './card-product-cart.component.css',
})
export class CardProductCartComponent {

  @Input() public product!:Product; 

  get fullImageUrl() {
    return `${environment}${this.product.photo}`;
  }
}
