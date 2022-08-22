export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user:  User;
 }

 export interface User {
  _id:      string;
  email:    string;
  fullName: string;
  isActive: boolean;
  password: string;
  roles:    string[];
 }

