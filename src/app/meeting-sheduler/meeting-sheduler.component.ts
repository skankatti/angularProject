import { Component, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIService } from './api.service';



const saveDetailsUrl = 'http://localhost:8080/meeting/save-details';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Component({
  selector: 'app-meeting-sheduler',
  templateUrl: './meeting-sheduler.component.html',
  styleUrls: ['./meeting-sheduler.component.css'],

})
export class MeetingShedulerComponent {
  meeting = {
    createdBy: "",
    meetingWith: "",
    meetingDate: "",
    startTime: "",
    endTime: "",
    description: "",
    createdByEmail: "",
    meetingWithEmail: ""
};
  errorMessage = '';

  constructor(private apiService:APIService){
  }
 

  scheduleMeeting() {
    if (this.meeting.createdByEmail && this.meeting.meetingWithEmail && this.meeting.meetingDate
      && this.meeting.description) {
      this.apiService.saveDetailsOfMeeting(saveDetailsUrl, this.meeting, httpOptions)
      
      console.log('Meeting scheduled:', this.meeting);
      alert("Meeting has been scheduled successfully, mail will be reveived shortly")
    } 
    else {
        alert("Please fill in all fields.")
    }
  }

  
  
  

}
