import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interface/product.interface';
@Component({
  selector: 'card-catalog',
  templateUrl: './card-catalog.component.html',
  styleUrl: './card-catalog.component.css',
})
export class CardCatalogComponent{
  @Input() public product!:Product;

  @Output() deleteCard: EventEmitter<number> = new EventEmitter<number>();

  deleteOne(id:number){
    this.deleteCard.emit(id); 
  }
}
