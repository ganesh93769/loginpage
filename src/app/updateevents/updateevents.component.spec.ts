import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateeventsComponent } from './updateevents.component';

describe('UpdateeventsComponent', () => {
  let component: UpdateeventsComponent;
  let fixture: ComponentFixture<UpdateeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateeventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
