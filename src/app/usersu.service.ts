import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usersu } from './usersu';

@Injectable({
  providedIn: 'root',
})
export class UsersuService {
  private baseURL = 'http://localhost:2023/usersu/';
  currentuser: any;
  constructor(private httpClient: HttpClient) {}

  loginuser(email: String, password: String): Observable<Boolean|any> {
    // console.log(this.httpClient.get<boolean>(`${this.baseURL}/${email}/pwd/${password}`));
    this.currentuser = email;
    return this.httpClient.get<Boolean>(
      `${this.baseURL}loginvalidate/${email}/pwd/${password}`
    );
  }

  getUserslist(): Observable<Usersu[]> {
    return this.httpClient.get<Usersu[]>(`${this.baseURL}get`);
  }

  createNewUser(newuser: Usersu): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}createuser`, newuser);
  }

  getUserByEmail(email: String): Observable<Usersu[]> {
    return this.httpClient.get<Usersu[]>(`${this.baseURL}getuser/${email}`);
  }

  updateUser(email: String, updateduser: Usersu): Observable<Object> {
    return this.httpClient.put(
      `${this.baseURL}updatepass/${email}`,
      updateduser
    );
  }
}
