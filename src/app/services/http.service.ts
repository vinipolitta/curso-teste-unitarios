import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.url}/users`);
  }

  getUserById(id) {
    return this.http.get(`${this.url}/users/${id}`);
  }

  postUser(user: any) {
    return this.http.post(`${this.url}/users`, user);
  }

  putUser(user: any, id: number) {
    return this.http.put(`${this.url}/users/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.url}/users/${id}`);
  }

  getUsersWhithHeaders() {
    const token = 'fa8sd7f9ads7f89d7af89ad7sf98das7f98ads7f89ads7f';
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.url}/users`, { headers });
  }
}
