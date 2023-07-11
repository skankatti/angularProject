import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderHtmlpageComponent } from './render-htmlpage.component';

describe('RenderHtmlpageComponent', () => {
  let component: RenderHtmlpageComponent;
  let fixture: ComponentFixture<RenderHtmlpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenderHtmlpageComponent]
    });
    fixture = TestBed.createComponent(RenderHtmlpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
