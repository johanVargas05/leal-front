export interface WalletHistory {
  _id:         string;
  action:      'deposit' | 'egress';
  createAt:    Date;
  description: string;
  idUser:      string;
  points:      number;
 }
