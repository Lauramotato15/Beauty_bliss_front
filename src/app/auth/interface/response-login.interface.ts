import { UserToken } from "./user-token.interface";

export interface LoginResponse{
    data: UserToken;
    status: number;
    success: boolean; 
}