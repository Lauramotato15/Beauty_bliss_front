import { Component, Input, OnInit, Output } from '@angular/core';
import { Sale } from '../../interface/sale.interface';
import { Product } from '../../interface/product.interface';
import { SaleDetail } from '../../interface/sale-detail.interface';
import { Category } from '../../../categories/interface/category.interface';

@Component({
  selector: 'products-table-sale',
  templateUrl: './card-sale.component.html',
  styleUrl: './card-sale.component.css'
})
export class CardSaleComponent implements OnInit{
  @Input() public soldProduct!:Sale; 
  
  ngOnInit(): void {
    console.log("SOY DESDE ACXA",this.soldProduct);  
    console.log("soy arreglo productos", this.soldProduct.products[0].id_product)
  }
}
