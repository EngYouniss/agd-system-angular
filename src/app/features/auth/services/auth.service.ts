import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../../../core/models/iuser';
import { Observable } from 'rxjs';
import { ILogin } from '../../../core/models/auth/ilogin';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) {

  }
  login(email: string, password: string){
  return this._http.post<ILogin>(`${environment.baseUrl}`,{
    email,
    password
  });
}

}
