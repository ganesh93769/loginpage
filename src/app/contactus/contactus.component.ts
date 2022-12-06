import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  uname='';
  email='';
  msg='';
  
emps=[{ userName:'Ganesh',Email:'ganesh@gmail.com',Message:'How to view calender'},
]



  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.emps.push({userName:this.uname,Email:this.email,Message:this.msg})
  }
  

}
