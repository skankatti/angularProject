import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})


export class APIService {

  constructor(private http: HttpClient){
  }
 

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
}
