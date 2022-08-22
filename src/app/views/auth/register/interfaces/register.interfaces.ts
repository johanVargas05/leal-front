export interface RegisterData {
  fullName: string;
  email: string;
  password: string;
}


export interface RegisterResponse {
  token: string;
  user:  User;
 }

interface User {
  _id:      string;
  email:    string;
  fullName: string;
  isActive: boolean;
  password: null;
  points:   number;
  roles:    string[];
 }
