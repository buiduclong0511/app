import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";

import { UserService } from "../user.service";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userInfo: any;

  constructor(private authService: AuthService, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.userService.getUserProfile(params.get("id"))
          .subscribe((data: any) => {
            this.userInfo = { ...data.data }
          });
      });
  }

  logout() {
    this.authService.logout()
      .subscribe(() => {
        window.location.assign("/login");
        window.localStorage.clear();
      });
  }
}
