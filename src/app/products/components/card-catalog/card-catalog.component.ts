import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { Product } from '../../interface/product.interface';
@Component({
  selector: 'card-catalog',
  templateUrl: './card-catalog.component.html',
  styleUrl: './card-catalog.component.css',
})
export class CardCatalogComponent implements OnInit , OnDestroy{

  public sub?:Subscription;
  public products:Product[] = []; 

  constructor(private serviceProduct: ProductService){}

  ngOnInit(): void {
    this.sub = this.serviceProduct.getAllProducts().subscribe(products => {
      console.log(products); 
    })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe; 
  }
}
