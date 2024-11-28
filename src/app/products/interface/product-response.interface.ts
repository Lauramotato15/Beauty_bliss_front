import { Product } from "./product.interface";

  export interface ApiResponseAll {
    data: Product[]; 
    status: number;
    success: boolean;
  }

  export interface ApiResponseOne {
    data: Product;  
    status: number;
    success: boolean;
  }
  