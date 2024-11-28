import { User } from "../../users/interface/user.interface";

export interface UserToken {
    token: string;
    user: User; 
}