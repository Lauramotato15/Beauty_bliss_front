import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interface/product.interface';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'card-cart',
  templateUrl: './card-product-cart.component.html',
  styleUrl: './card-product-cart.component.css',
})
export class CardProductCartComponent implements OnInit{

  @Input() public product!:Product; 

  get fullImageUrl() {
    return `${environment.profilesUrl}${this.product.photo}`;
  }
  
  ngOnInit(): void {
    console.log(this.product); 
  }
}
