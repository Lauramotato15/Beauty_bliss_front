import { Product } from "../../products/interface/product.interface";

export interface Stock{
    id: number; 
    quantity: number; 
    id_product:Product; 
}