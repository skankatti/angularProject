import { Component, OnInit } from '@angular/core';
import { ViewDetailsService } from './view-details.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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
export class ViewDetailsComponent implements OnInit{
  constructor(private http: HttpClient){
  }
meetingDetails:any;

  ngOnInit(){
    this.http.get<any>(saveDetailsUrl).subscribe(
      (response) => {
        // Assign the response data to the 'meetings' property
        this.meetingDetails = response.data;
        console.log('Data : ', this.meetingDetails);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
}
