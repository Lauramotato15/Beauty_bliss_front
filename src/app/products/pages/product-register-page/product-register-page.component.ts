import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'product-register-page',
  templateUrl: './product-register-page.component.html',
  styleUrl: './product-register-page.component.css'
})
export class ProductRegisterPageComponent {
  constructor(private readonly serviceProduct: ProductService){}

  
}
