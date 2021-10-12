import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { loginSucess } from '../models/login-succes.model';
import { User } from '../models/user.model';
import { createUserSuccess } from '../models/create-user-success.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public URL: string = 'https://reqres.in/api/';

  constructor(private httpClient: HttpClient) { }

  sendData(user: User) {
    return this.httpClient.post<loginSucess>(
      `${this.URL}login`, 
      { ...user }
    );
  }

  createUser(user: User) {
    return this.httpClient.post<createUserSuccess>(
      `${this.URL}register`,
      { ...user }
    );
  }

}