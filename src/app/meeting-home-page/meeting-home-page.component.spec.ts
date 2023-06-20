import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingHomePageComponent } from './meeting-home-page.component';

describe('MeetingHomePageComponent', () => {
  let component: MeetingHomePageComponent;
  let fixture: ComponentFixture<MeetingHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingHomePageComponent]
    });
    fixture = TestBed.createComponent(MeetingHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
