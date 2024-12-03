import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../interface/product.interface';
import { environment } from '../../../../environments/environment.development';
import { AlertService } from '../../../shared/services/alert.service';
@Component({
  selector: 'card-catalog',
  templateUrl: './card-catalog.component.html',
  styleUrl: './card-catalog.component.css',
})
export class CardCatalogComponent {

  constructor(private readonly serviceAlert: AlertService){}; 

  @Input() public product!:Product;

  @Output()public onDelete: EventEmitter<number> = new EventEmitter<number>();

  @Output() public onAddCart: EventEmitter<Product> = new EventEmitter<Product>(); 

  deleteOne(id:number){
    this.onDelete.emit(id); 
  }

  addCartSale(product:Product){
    this.onAddCart.emit(product);
    this.serviceAlert. showSuccess("Agregado con exito");
  }

  get fullImageUrl() {
    if(this.product.photo){
      return `${environment.profilesUrl}${this.product.photo}`;
    }
    return;
  }
}
