import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { Product } from '../../interface/product.interface';
@Component({
  selector: 'card-catalog',
  templateUrl: './card-catalog.component.html',
  styleUrl: './card-catalog.component.css',
})
export class CardCatalogComponent{

  @Input()
  public product!:Product;
}
