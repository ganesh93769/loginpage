import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usersu } from '../usersu';
import { UsersuService } from '../usersu.service';
@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  constructor(private router: Router, private usersservice: UsersuService) {}

  Usersu: Usersu = new Usersu();
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
                this.router.navigate(['user']);
              } else {
                Swal.fire("You entered an invalid Username or Password");
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



