import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Facebook from "nativescript-facebook";
import * as appSettings from 'application-settings';


@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login-common.css']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router){}

    ngOnInit() {

        if ( appSettings.getString('access_token') ) {
            this.router.navigate(['/video-list']);
        }        
    }

    onLogin(eventData: Facebook.LoginEventData) {

        if (eventData.error) {
            alert("Error during login: " + eventData.error);
        } else {
            appSettings.setString('access_token', eventData.loginResponse.token);
            this.router.navigate(['/video-list']);
        }
    }
}