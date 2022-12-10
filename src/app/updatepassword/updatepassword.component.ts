import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersuService } from '../usersu.service';
import { Usersu } from '../usersu';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {
  newuser: Usersu = new Usersu();
  form = new FormGroup({
    details: new FormGroup({
      email: new FormControl(),
      
      
      pwd: new FormControl(),
    
    }),
  });

  constructor(public userservice: UsersuService, private router: Router) { }

  ngOnInit(): void {
  }
  updateUser(){
    this.userservice.updateUser(this.newuser.email,this.newuser).subscribe(
      (data) => {
        console.log(data);
        Swal.fire("Thank you",'Password updated succesfully','success')
        this.router.navigate(['login2']);
      },
      
    );

  }

}
