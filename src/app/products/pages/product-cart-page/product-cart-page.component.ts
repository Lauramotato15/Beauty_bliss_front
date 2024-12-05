import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Product } from '../../interface/product.interface';
import { ProductService } from '../../services/product.service';
import { Sale } from '../../interface/sale.interface';
import { SaleDetail } from '../../interface/sale-detail.interface';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'product-cart-page',
  templateUrl: './product-cart-page.component.html',
  styleUrl: './product-cart-page.component.css'
})
export class ProductCartPageComponent implements OnInit{
  
  public products: Product[] = [];

  constructor(
    private readonly serviceAuth:AuthService, 
    private readonly serviceProduct: ProductService, 
    private readonly serviceAlert: AlertService, 
  ){}

  ngOnInit(): void {
    this.products = this.serviceAuth.loadLocalStorage<Array<Product>>('cart');
  }

  get total(){
    return this.products.reduce((acum, product) => {
    const quantity = product.quantity ?? 0;
      return acum + (quantity * +product.price);
    }, 0);

  }

  addSale(){
    const newSale:Sale = {
      products: this.products.map<SaleDetail>(p => ({ quantity: p.quantity, id_product: p.id, total_value: p.quantity * (+p.price) })), 
      total_value: this.total,
    }
    
    this.serviceProduct.createSale(newSale).subscribe(resp => {
      if(resp.success){
        this.serviceAlert.showSuccess("Compra exitosa");
        this.serviceAuth.clearStorageCart(); 
      }
    });
  }
}
