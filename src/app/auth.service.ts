import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  constructor(private http: HttpClient) {
    this.token = window.localStorage.getItem("token") || "";
  }

  getMe() {
    const header = new HttpHeaders({
      "content-type": "application/json",
      "Authorization": `Bearer ${this.token}`
    });
    const url = "https://tiktok.f8team.dev/api/auth/me";
    return this.http.get(url, { headers: header });
  }

  logout() {
    const header = new HttpHeaders({
      "content-type": "application/json",
      "Authorization": `Bearer ${this.token}`
    });
    const url = "https://tiktok.f8team.dev/api/auth/logout";
    return this.http.post(url, {}, { headers: header });
  }
}
