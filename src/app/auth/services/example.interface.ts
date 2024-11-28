// Utility Types 
export interface Car<T = any> {
    shape: string;
    wheels?: number;
    name?: string;
    user: T
}

export type EmptyCar = Partial<Car>;
export type FullCar = Required<Car>;