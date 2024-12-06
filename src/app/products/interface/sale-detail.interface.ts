import { Product } from "./product.interface";

export interface SaleDetail{
    id_product?: number; 
    quantity: number; 
    total_value: number; 
    products?: Product;
}