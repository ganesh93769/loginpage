import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseURL = 'http://localhost:2023/users/';
  currentuser: any;
  constructor(private httpClient: HttpClient) {}

  loginuser(email: String, password: String): Observable<Boolean|any> {
    // console.log(this.httpClient.get<boolean>(`${this.baseURL}/${email}/pwd/${password}`));
    this.currentuser = email;
    return this.httpClient.get<Boolean>(
      `${this.baseURL}loginvalidate/${email}/pwd/${password}`
    );
  }

  getUserslist(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(`${this.baseURL}get`);
  }

  createNewUser(newuser: Users): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}createuser`, newuser);
  }

  getUserByEmail(email: String): Observable<Users[]> {
    return this.httpClient.get<Users[]>(`${this.baseURL}getuser/${email}`);
  }

  updateUser(email: String, updateduser: Users): Observable<Object> {
    return this.httpClient.put(
      `${this.baseURL}updatepass/${email}`,
      updateduser
    );
  }
}
