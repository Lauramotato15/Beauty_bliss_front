import { Category } from "../../categories/interface/category.interface";
import { Stock } from "../../stock/interfaces/stock.interface";

export interface Product <T = Category>{
    id: number;
    name: string;
    price: string;
    category: T;
    description: string;
    brand: string; 
    photo: File;
    stock: Stock[];
}
  