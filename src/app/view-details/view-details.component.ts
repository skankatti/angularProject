import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { APIService } from '../meeting-sheduler/api.service';


const getDetailsUrl = 'http://localhost:8080/meeting/get-meeting-details';

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
export class ViewDetailsComponent implements OnInit {
  constructor(private http: HttpClient,private dialog: MatDialog, private apiService:APIService) {
  }

  meetingDetails: any;
  deleteDetails: any;
  meetingId: any;


  ngOnInit() {
    this.http.get<any>(getDetailsUrl).subscribe(
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
  deleteMeeting(index: number) {
    console.log('number: ', index);
    this.deleteDetails = this.meetingDetails[index]
    this.meetingId = this.deleteDetails.id;
    console.log('this.meetingId: ', this.meetingId);
    const deleteUrl = `http://localhost:8080/meeting/delete-details/${this.meetingId}`;
    
    this.http.delete(deleteUrl).subscribe(
      () => {
        console.log(`Meeting with id ${this.meetingId} deleted successfully.`);
        this.ngOnInit();
      },
      (error) => {
        console.error(`Error deleting meeting with id ${this.meetingId}:`, error);
      }
    );
 
  }
  confirmDelete(index: number) {
    const dialogRef: MatDialogRef<ConfirmationDialogComponent> = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.deleteMeeting(index);
      }
    });
  }


}