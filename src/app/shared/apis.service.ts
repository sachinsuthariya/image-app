import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import 'rxjs/add/observable/throw';

import { environment } from "../../environments/environment";
import { HelperService } from "./helper.service";
// import { TranslationService } from "./translation.service";

const API_URL = environment[environment.env].API_URL;

@Injectable({
    providedIn: 'root'
})
export class APIsService {

    token: string;

    constructor(public http: HttpClient,
        public router: Router,
        public helperService: HelperService) {

    }

    getHeaders() {
        this.token = this.helperService.getPREFString("token");

        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');

        headers.append("x-auth-token", this.token);
        headers.append("x-l10n-locale", this.helperService.getCurruntLanguage());

        // const options = new HttpRequest({ headers: headers });
        const options = ({ headers: headers });

        return options;
    }

    postApiResponse(url: string, data: Object): Observable<Object> {
        const options = this.getHeaders();
        return this.http
            .post(API_URL + url, data, options);
    }

    putApiResponse(url: string, data: Object): Observable<Object> {
        const options = this.getHeaders();
        return this.http
            .put(API_URL + url, data, options);
    }

    deleteApiResponse(url: string): Observable<Object> {
        const options = this.getHeaders();
        return this.http.delete(API_URL + url, options);
    }

    getApiResponse(url: string): Observable<any> {
        const options = this.getHeaders();
        return this.http.get(API_URL + url, options);
    }


    // API's function start from here...

    login(data): Observable<Object> {
        return this.postApiResponse("user/signIn", data);
    }

}