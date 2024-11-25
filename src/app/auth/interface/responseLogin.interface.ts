import { userToken } from "./user-token.interface";

export interface ResponseLogin{
    data: userToken, 
    status: number, 
    success: boolean,
}