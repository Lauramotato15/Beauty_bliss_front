import { Category } from "../../categories/interface/category.interface";
import { Stock } from "../../stocks/interfaces/stock.interface";

export interface Product <T = Category>{
    id: number;
    name: string;
    price: number | string;
    category: T;
    description: string;
    brand: string; 
    photo: File;
    stock: Stock[];
    quantity:number;
}
