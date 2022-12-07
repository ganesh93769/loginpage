import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieweventsComponent } from './viewevents.component';

describe('VieweventsComponent', () => {
  let component: VieweventsComponent;
  let fixture: ComponentFixture<VieweventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieweventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VieweventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
