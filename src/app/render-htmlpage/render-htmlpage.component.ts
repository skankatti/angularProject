import { Component } from '@angular/core';
import { APIService } from '../meeting-sheduler/api.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-render-htmlpage',
  templateUrl: './render-htmlpage.component.html',
  styleUrls: ['./render-htmlpage.component.css']
})
export class RenderHtmlpageComponent {
  
  constructor(private http: HttpClient,private dialog: MatDialog, private apiService:APIService) {
  }
  htmlResponse:any;

  // ngOnInit() {
  //   this.apiService.getHTMLResponse().subscribe(response => {
  //     this.htmlResponse = response;
  //     console.log('this.htmlResponse: ', this.htmlResponse);
  //   });
  // }

  ngOnInit() {
    this.http.get<any>("http://localhost:8080/pdf/example").subscribe(
      (response) => {
        // Assign the response data to the 'meetings' property
        this.htmlResponse = response;
        console.log('Data : ', this.htmlResponse);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
