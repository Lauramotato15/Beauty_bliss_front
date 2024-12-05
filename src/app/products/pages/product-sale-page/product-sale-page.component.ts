import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Sale } from '../../interface/sale.interface';

@Component({
  selector: 'product-sale-page',
  templateUrl: './product-sale-page.component.html',
  styleUrl: './product-sale-page.component.css'
})
export class ProductSalePageComponent implements OnInit{
  
  public sales!:Sale[];
  constructor(private readonly serviceProduct: ProductService){}
  
  ngOnInit(): void {
    this.serviceProduct.getSaleById().subscribe(sales => {
      console.log("soy sale"+sales.data);
      if(sales.data){
        this.sales = sales.data;
      }
    })
  }
}
