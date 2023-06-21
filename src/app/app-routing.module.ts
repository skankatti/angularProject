import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingHomePageComponent } from './meeting-home-page/meeting-home-page.component';
import { MeetingShedulerComponent } from './meeting-sheduler/meeting-sheduler.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MeetingHomePageComponent },
  { path: 'schedule-meeting', component: MeetingShedulerComponent },
  {path: 'view-details', component: ViewDetailsComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
