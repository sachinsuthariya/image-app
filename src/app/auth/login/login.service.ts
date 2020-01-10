import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    constructor(private router: Router) { }

    isLogin() {
        return !!localStorage.getItem("token");
        // return true;
    }

    getToken() {
        return localStorage.getItem("token");
    }

    getLocalStorageData() {
        return {
            id: localStorage.getItem("id"),
            email: localStorage.getItem("email"),
            isAdmin: localStorage.getItem("isAdmin"),
            roleId: localStorage.getItem("roleId"),
            token: localStorage.getItem("token")
        };
    }

    setLocalStorageData(data) {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                localStorage.setItem(key, data[key]);
            }
        }
    }

    Logout() {
        localStorage.clear();
        return this.router.navigate(['/']);
    }
}