import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../../../core/models/iuser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) {

  }
  login(email: string, password: string): Observable<IUser[]> {
  return this._http.get<IUser[]>(`http://localhost:3000/users?email=${email}&password=${password}`);
}

}
