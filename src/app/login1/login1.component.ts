import { Component, OnInit } from '@angular/core';

 import{FormControl,FormGroup,FormsModule,ReactiveFormsModule} from '@angular/forms';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Users } from '../users';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit  {
  constructor(private router: Router, private usersservice: UsersService) {}

  Users: Users = new Users();
  // signupbutton: boolean | false;
  errormsg = '';
  errorshow: boolean | false | undefined;
  emailregex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  form = new FormGroup({
    details: new FormGroup({
      email: new FormControl(),
      pwd: new FormControl(),
    }),
  });

  ngOnInit(): void {
    this.errorshow = false;
  }

  Login(): void {
    console.log(this.form.value.details?.pwd);
    console.log('login working');
    if (
      this.form.value.details?.email &&
      this.emailregex.test(this.form.value.details.email)
    ) {
      if (this.form.value.details.pwd) {
        this.usersservice
          .loginuser(this.form.value.details.email, this.form.value.details.pwd)
          .subscribe((data) => {
            console.log('heree....');
            console.log(data[1]);

            if (data[0] == true) {
              if (data[1] == true) {
                this.router.navigate(['admin']);
              } else {
                // alert('You entered an invalid Username or Password');
                Swal.fire("Invalid username or Password")
              }
            } else {
              this.errormsg = 'If you are new user please signup';
              this.errorshow = true;
            }
          });
      } else {
        this.errormsg = 'Please Enter Valid Password';
        this.errorshow = true;
      }
    } else {
      this.errormsg = 'Please enter Valid Email';
      this.errorshow = true;
    }
  }

  signup() {
    this.router.navigate(['signup']);
  }
}


