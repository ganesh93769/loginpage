import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  uname='';
  ename='';
  edate='';
 
  emps=[{ userName:'Ganesh',eventName:'diwali', eventdate:'20-03-2020'},
 
]

  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.emps.push({userName:this.uname,eventName:this.ename,eventdate:this.edate})
  }

}
