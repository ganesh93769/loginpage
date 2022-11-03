import { Component, OnInit } from '@angular/core';
import { Register } from '../register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model = new Register('', '', '', 0, '')
  submitted = false;
  onSubmit() {this.submitted=true;}
  newRegister(){
    this.model = new Register('', '', '', 0, '');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
