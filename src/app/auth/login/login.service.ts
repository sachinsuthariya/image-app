import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    constructor() { }

    isLogin() {
        return !!localStorage.getItem("token");
        // return true;
    }

    getToken() {
        return localStorage.getItem("token");
    }

    getLocalStorageData() {
        return {
            _id: localStorage.getItem("_id"),
            restaurantName: localStorage.getItem("restaurantName"),
            username: localStorage.getItem("username"),
            ownerName: localStorage.getItem("ownerName"),
            city: localStorage.getItem("city"),
            address: localStorage.getItem("address")
        };
    }

    Logout() {
        return localStorage.clear();
    }
}