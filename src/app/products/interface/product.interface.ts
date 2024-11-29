import { Category } from "../../categories/interface/category.interface";

export interface Product {
    id: number;
    name: string;
    price: string;
    category: Category;
    description: string;
    brand: string; 
    photo: File;
}
  