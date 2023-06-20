import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingShedulerComponent } from './meeting-sheduler.component';

describe('MeetingShedulerComponent', () => {
  let component: MeetingShedulerComponent;
  let fixture: ComponentFixture<MeetingShedulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingShedulerComponent]
    });
    fixture = TestBed.createComponent(MeetingShedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
