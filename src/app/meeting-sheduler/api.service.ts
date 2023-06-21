import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})

@Injectable()
export class APIService {
  this: any;

  constructor(private http: HttpClient){
  }
  
 meetingData:any;

  saveDetailsOfMeeting(url:any, requestBody:any, httpOptions:any) {
    this.http.post(url, requestBody, httpOptions).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  meetingDetails(url:any,httpOptions:any){
    // window.onbeforeunload = () => {
    this.http.get<any>(url).subscribe(
      (response) => {
        // Assign the response data to the 'meetings' property
        this.meetingData = response.data;
        console.log('this.meetingData : ', this.meetingData);
      },
      (error) => {
        console.error(error);
      }
    );
  // };
  }
}
