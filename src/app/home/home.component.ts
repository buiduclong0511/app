import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLogin = false;
  posts: any = [];
  userInfo: any = null;

  constructor(private authService: AuthService, private postService: PostService) {  }

  ngOnInit(): void {
    const token = window.localStorage.getItem("token") || "";
    this.isLogin = !!token;
    if (!!token) {
      this.authService.getMe()
        .subscribe((data: any) => {
          window.localStorage.setItem("userInfo", JSON.stringify(data.data));
          this.userInfo = { ...data.data };
        })
    } else {
      window.location.assign("login");
    }
    this.postService.getPosts()
      .subscribe((data: any) => {
        this.posts = [...data.data];
      })
  }

  linkToProfile(nickname: string) {
    return "/profile/" + nickname;
  }

  goToProfile(nickname: string) {
    window.location.assign(this.linkToProfile(nickname));
  }
}
