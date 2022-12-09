import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { Login1Component } from './login1/login1.component';
import { EventComponent } from './event/event.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { BookingComponent } from './booking/booking.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { FooterComponent } from './footer/footer.component';
import { VieweventsComponent } from './viewevents/viewevents.component';
import { UpdateeventsComponent } from './updateevents/updateevents.component';
import { Login2Component } from './login2/login2.component';
import { ViewfeedbacksComponent } from './viewfeedbacks/viewfeedbacks.component';
import { ViewbookingsComponent } from './viewbookings/viewbookings.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    Login1Component,
    EventComponent,
    AdminComponent,
    PageNotFoundComponent,
    UserComponent,
    BookingComponent,
    FeedbackComponent,
    ContactusComponent,
    CalendarComponent,
    FooterComponent,
    VieweventsComponent,
    UpdateeventsComponent,
    Login2Component,
    ViewfeedbacksComponent,
    ViewbookingsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    RouterModule.forRoot([
      {path: 'login1', component:Login1Component},
      {path: 'login2', component:Login2Component},
      {path: 'register', component:RegisterComponent},
      {path: 'admin', component:AdminComponent },
      {path: 'event', component:EventComponent},
      {path: 'user', component:UserComponent},
      {path: 'booking', component:BookingComponent},
      {path: 'feedback', component:FeedbackComponent},
      {path: 'contactus', component:ContactusComponent},
      {path: 'calendar', component:CalendarComponent},
      {path:'viewevents',component:VieweventsComponent},
      {path:'viewfeedbacks',component:ViewfeedbacksComponent},
      {path:'viewbookings', component:ViewbookingsComponent},
      {path:'updateevents',component:UpdateeventsComponent},
      {path: '', redirectTo: '/login1', pathMatch: 'full'},
      {path: '**', component:PageNotFoundComponent}
      // {path: '', redirectTo: '/heros-list', pathMatch: 'full'},
      // {path: '**', component:PageNotFoundComponent}

    ]),
    FormsModule,
    ReactiveFormsModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
