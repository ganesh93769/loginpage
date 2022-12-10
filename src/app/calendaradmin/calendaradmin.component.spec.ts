import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendaradminComponent } from './calendaradmin.component';

describe('CalendaradminComponent', () => {
  let component: CalendaradminComponent;
  let fixture: ComponentFixture<CalendaradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendaradminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendaradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
