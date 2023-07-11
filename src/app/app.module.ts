import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { MeetingShedulerComponent } from './meeting-sheduler/meeting-sheduler.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MeetingHomePageComponent } from './meeting-home-page/meeting-home-page.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { RenderHtmlpageComponent } from './render-htmlpage/render-htmlpage.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    CheckBoxComponent,
    MeetingShedulerComponent,
    MeetingHomePageComponent,
    ViewDetailsComponent,
    ConfirmationDialogComponent,
    RenderHtmlpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
