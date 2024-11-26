import { Product } from "./product.interface";

  export interface ApiResponse {
    data: Product[];  // 'data' es un array de objetos 'Product'
    status: number;
    success: boolean;
  }
  