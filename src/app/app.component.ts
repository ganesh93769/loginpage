import { Component } from '@angular/core';
import { Login } from './login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginpage';
  model = new Login('', '');
  submitted = false;
  onSubmit() {this.submitted = true;}
  newLogin(){
    this.model = new Login('', '');
  }
}
