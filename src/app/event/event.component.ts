import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/event';
 import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  eid=0;
  ename=''
  edesc=''
  edate=''
  estrt='';
  emps=[{eventId:1001, eventName:'diwali',eventdesc:'floor1', eventdate:'20-03-2020', eventstrttime:'17:05'},
  {eventId:1002, eventName:'pandagoww1',eventdesc:'floor2',eventdate:'21-03-2022', eventstrttime:'17:15'},
  {eventId:1003, eventName:'pandagow2',eventdesc:'floor3', eventdate:'22-03-2022', eventstrttime:'17:25'},
]

  constructor() {
    
   }

  ngOnInit(): void {
  }
  add(){
    this.emps.push({eventId:this.eid,eventName:this.ename,eventdesc:this.edesc,eventdate:this.edate,eventstrttime:this.estrt,})
  }

}
