import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface IBody {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(body: IBody) {
    const url = "https://tiktok.f8team.dev/api/auth/login";
    return this.http.post(url, body);
  }
}
