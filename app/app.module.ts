import * as application from 'application';
import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { NativeScriptFacebookModule } from "nativescript-facebook/angular";

import { AppComponent } from "./app.component";
import { LoginComponent } from './pages/login/login.component';
import { VideoListComponent } from './pages/video-list/video-list.component';

let nsFacebook = require('nativescript-facebook');

application.on(application.launchEvent, function (args) {
    nsFacebook.init("177869632788924");
});

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFacebookModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        VideoListComponent
    ],
    bootstrap: [ AppComponent ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
