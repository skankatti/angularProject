import { Component } from '@angular/core';
import { APIService } from '../meeting-sheduler/api.service';
import { HttpHeaders } from '@angular/common/http';

const saveDetailsUrl = 'http://localhost:8080/meeting/get-meeting-details';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-meeting-home-page',
  templateUrl: './meeting-home-page.component.html',
  styleUrls: ['./meeting-home-page.component.css']
})
export class MeetingHomePageComponent {
}
