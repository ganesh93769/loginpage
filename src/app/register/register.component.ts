import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../users';
import { UsersuService } from '../usersu.service';
import { Usersu } from '../usersu';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newuser: Usersu = new Usersu();
  passtemp!: String;

  form = new FormGroup({
    details: new FormGroup({
      email: new FormControl(),
      fname: new FormControl(),
      lname: new FormControl(),
      gender: new FormControl(),
      phn: new FormControl(),
      pwd: new FormControl(),
      pin: new FormControl(),
    }),
  });
  constructor(public userservice: UsersuService, private router: Router) {}

  ngOnInit(): void {}

  createnewuser() {
    if (this.newuser.password) {
      if (this.newuser.password == this.passtemp) {
        console.log(this.newuser);

        
          this.userservice.createNewUser(this.newuser).subscribe(
            (data) => {
              console.log(data);
              alert('Successfully registered');
              this.router.navigate(['login2']);
            },
            
          );
        
      } else {
        console.log('please enter correct password');
      }
    } else {
      console.log('enter password');
    }
  }
}
