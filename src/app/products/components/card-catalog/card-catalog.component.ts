import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  public quantity:number = 0;
 
  deleteOne(id:number){
    this.onDelete.emit(id); 
  }

  addCartSale(product:Product){
    this.product.quantity = this.quantity; 
    this.onAddCart.emit(product);
    this.serviceAlert. showSuccess("Agregado con exito");
  }

  get fullImageUrl() {
    if(this.product.photo){
      return `${environment.profilesUrl}${this.product.photo}`;
    }
    return;
  }

  decrement(){
    if(this.quantity > 1) this.quantity--; 
  }

  increment(){
    const stock = this.product.stock[0].quantity;
    if(this.quantity > stock){
      this.serviceAlert.showWarning("No hay suficiente stock"); 
    } 
    this.quantity++;
  }
}
