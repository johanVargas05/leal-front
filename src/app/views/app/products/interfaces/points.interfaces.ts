export interface PointsResponse {
  _id:         string;
  action:      string;
  createAt:    Date;
  description: string;
  idUser:      string;
  points:      number;
 }

export interface PointsAction {
  action:      string;
  createAt:    Date;
  description: string;
  points:      number;
 }
