import { User } from "./user.interface";

export interface UserResponse{
    data: User;
    status: number; 
    success: boolean; 
}