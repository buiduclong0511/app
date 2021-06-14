import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

import { LoginService } from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formSignIn: FormGroup;

  constructor(private loginService: LoginService) { 
    this.formSignIn = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formSignIn.value);
    this.loginService.login(this.formSignIn.value)
      .subscribe((data: any) => {
        window.localStorage.setItem("token", data.meta.token);
        window.location.assign("/");
      });
  }
}
