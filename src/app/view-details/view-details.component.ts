import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { APIService } from '../meeting-sheduler/api.service';


const saveDetailsUrl = 'http://localhost:8080/meeting/get-meeting-details';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent {
  constructor(private apiService:APIService){
  }
  meetingDetails:any

  ngOnInit() {

    // this.callFunctionOnRefresh();

      this.apiService.meetingDetails(saveDetailsUrl,httpOptions);
      this.meetingDetails=this.apiService.meetingData
      console.log('this.meetingDetails: ', this.meetingDetails);
  }



}
