import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../auth/login/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean = false;
  constructor(private loginService: LoginService) {
    this.isAuth = this.loginService.isLogin()
  }

  ngOnInit() {
  }

  logout() {
    this.loginService.Logout();
  }
}
