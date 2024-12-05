import { Component, Input, OnInit, Output } from '@angular/core';
import { Sale } from '../../interface/sale.interface';

@Component({
  selector: 'products-table-sale',
  templateUrl: './card-sale.component.html',
  styleUrl: './card-sale.component.css'
})
export class CardSaleComponent implements OnInit{
  @Input() public soldProduct!:Sale; 
  
  ngOnInit(): void {
    console.log("SOY DESDE ACXA",this.soldProduct);  
    console.log("soy arreglo productos", this.soldProduct.products)
  }
}
