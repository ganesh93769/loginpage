import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { Login1Component } from './login1/login1.component';
import { EventComponent } from './event/event.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    Login1Component,
    EventComponent,
    AdminComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'login1', component:Login1Component},
      {path: 'register', component:RegisterComponent},
      {path: 'admin', component:AdminComponent },
      {path: 'event', component:EventComponent},
      {path: '', redirectTo: '/login1', pathMatch: 'full'},
      {path: '**', component:PageNotFoundComponent}
      // {path: '', redirectTo: '/heros-list', pathMatch: 'full'},
      // {path: '**', component:PageNotFoundComponent}

    ]),
    FormsModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
