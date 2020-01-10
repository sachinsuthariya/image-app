import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

import { environment } from "../../environments/environment";
@Injectable({
    providedIn: 'root'
})

export class HelperService {
    public curruntLanguage: any;
    constructor(public router: Router,
        private toasterService: ToastrService) {

    }

    getCurruntLanguage() {
        return this.curruntLanguage = this.getPREFString('language');
    }

    setPREF(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    getPREF(key) {
        return JSON.parse(window.localStorage.getItem(key));
    }

    setPREFString(key, value) {
        window.localStorage.setItem(key, value);
    }

    getPREFString(key) {
        return window.localStorage.getItem(key);
    }

    delPREF(key) {
        return window.localStorage.removeItem(key);
    }

    delAllPREF() {
        return window.localStorage.clear();
    }

    showSuccess(message) {
        const successMessage = message;
        // const title = this.translationService.getLocalizedString(['successPH']);
        const title = "Success";
        this.toasterService.success(successMessage, title);
    }

    showError(message) {
        const errorMessage = message;
        // const title = this.translationService.getLocalizedString(['errorPH']);
        const title = "Error";
        this.toasterService.error(errorMessage, title);
    }

    showWarning(message) {
        const warningMessage = message;
        // const title = this.translationService.getLocalizedString(['warningPH']);
        const title = "Warning";
        this.toasterService.warning(warningMessage, title);
    }

    showInfo(message) {
        const infoMessage = message;
        // const title = this.translationService.getLocalizedString(['infoPH']);
        const title = "Info";
        this.toasterService.info(infoMessage, title);
    }

    // showPrimary(message) {
    //     const primaryMessage = this.parseErrorMessage(message);
    //     const title = this.translationService.getLocalizedString(['primaryPH']);
    // this.toasterService.pop('primary', title, primaryMessage);
    // this.toasterService.(primaryMessage, title);
    // }


    // parseErrorMessage(message) {
    //     let errorMessage = '';
    //     try {
    //         const errorParse = JSON.parse(message);
    //         errorMessage = errorParse.error || errorParse.message;
    //     } catch (e) {
    //         if (typeof message === 'object') {
    //             errorMessage = message.message;
    //         } else {
    //             errorMessage = message;
    //         }
    //     }
    //     return errorMessage;
    // }

    // handleError(error) {
    //     const errResp = error.error;
    //     if (error.status === 401) {
    //         localStorage.clear();
    //         this.router.navigate(['/login']);
    //         return this.showError(errResp.message);
    //     } else {
    //         return this.showError(errResp.message);
    //     }
    // }

    printLog(log: any) {
        let env = "developement";
        if (environment.env === env) {
            console.log(log);
        }
    }


}