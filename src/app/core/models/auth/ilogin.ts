import { IUser } from "../iuser";

export interface ILogin {
    status: 'success' | 'error';
  message?: string;
  user?: IUser;
}
