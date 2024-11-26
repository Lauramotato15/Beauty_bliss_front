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
  public sub?:Subscription;
  public products:Product[] = []; 


  constructor(private serviceProduct: ProductService){}

  ngOnInit(): void {
    this.sub = this.serviceProduct.getAllProducts().subscribe(products => {
      if(products.data){
        this.products = products.data; 
      }
    })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe; 
  }
}
