import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  baseurl = "http://localhost:5000/api/users";

  users: User[] = [];
  
  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<User[]> {
    return this.http.get(`${this.baseurl}`) as Observable<User[]>;
  }
}
