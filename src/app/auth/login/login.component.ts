import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { LoginService } from "./login.service";
import { APIsService } from "../../shared/apis.service";
import { HelperService } from "../../shared/helper.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: Boolean = false;
  showPassword: Boolean = false;

  constructor(private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
    private apiService: APIsService,
    private helperService: HelperService) {

    // redirect to home if authenticated
    if (this.loginService.isLogin()) {
      this.router.navigate(['/home']);
    }

    // form builder
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      // isAdmin: [false]
    });


  }

  ngOnInit() {
  }

  // convenience getter for easy access to form fields
  get loginFormControl() { return this.loginForm.controls; }

  passwordToggle() {
    return this.showPassword = !this.showPassword;
  }

  loginSubmit() {
    this.submitted = true;
    if (!this.loginForm.valid) return false;

    this.apiService.login(this.loginForm.value)
      .subscribe(res => {
        const response = res;
        const body = response['body'];
        this.loginService.setLocalStorageData(body);
        this.helperService.showSuccess(response['message'])
        this.router.navigate(["/home"]);
      }, err => {
        let errMessage = err.error.message;
        this.helperService.showError(errMessage);
      });
  }

  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }

}
