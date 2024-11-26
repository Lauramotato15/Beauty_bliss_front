import { Category } from "./category.interface";

export interface Product {
    id: number;
    name: string;
    price: string;
    category: Category;
    description: string,
}
  