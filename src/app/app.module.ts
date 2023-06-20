import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { MeetingShedulerComponent } from './meeting-sheduler/meeting-sheduler.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MeetingHomePageComponent } from './meeting-home-page/meeting-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckBoxComponent,
    MeetingShedulerComponent,
    MeetingHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
