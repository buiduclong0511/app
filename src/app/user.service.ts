import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserProfile(nickname: string | null) {
    const url = `https://tiktok.f8team.dev/api/users/@${nickname}`;
    return this.http.get(url);
  }
}
