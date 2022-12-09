import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfeedbacksComponent } from './viewfeedbacks.component';

describe('ViewfeedbacksComponent', () => {
  let component: ViewfeedbacksComponent;
  let fixture: ComponentFixture<ViewfeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewfeedbacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewfeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
