import { SaleDetail } from "./sale-detail.interface";

export interface Sale {
    id? : number; 
    products: SaleDetail[];
    total_value: number; 
}