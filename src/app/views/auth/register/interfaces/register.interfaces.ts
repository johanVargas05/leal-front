import { User } from "@shared/interfaces/user.interfaces";

export interface RegisterData {
  fullName: string;
  email: string;
  password: string;
}


export interface RegisterResponse {
  token: string;
  user:  User;
 }

