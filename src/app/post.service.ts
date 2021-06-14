import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    const url = "https://tiktok.f8team.dev/api/posts?type=for-you&page=1";
    return this.http.get(url);
  }
}
