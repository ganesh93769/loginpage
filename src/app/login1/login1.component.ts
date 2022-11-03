import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/login';
 import{NgForm} from '@angular/forms';
import{FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
  dateToday: string = '';
  model = new Login('', '');
  cust = ["admin"]



  auth: { [key: string]: string } = {

    "admin" : "admin",

   

  }


  submitted = false;
  onSubmit() {this.submitted = true;}
  newLogin(){
    this.model = new Login('', '');
  }

  constructor() { }

  ngOnInit(): void {
    this.dateToday = new Date().toDateString();
  }
  submit(form: NgForm){



    let u = form.value.name;

    // const d = this.auth["Srinath"];

    if(this.cust.includes(u)){

      if(form.value.password==this.auth[u]){

        alert("sucess");

      }      

    }

}
}
