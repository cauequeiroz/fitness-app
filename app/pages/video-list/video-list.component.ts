import { Component } from '@angular/core';
import * as appConfig from 'application-settings';

@Component({
    moduleId: module.id,
    selector: 'video-list',
    templateUrl: './video-list.component.html'
})
export class VideoListComponent {

    private token = appConfig.getString('access_token');
}