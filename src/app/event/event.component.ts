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
  esdate=''
  eedate=''
  estrt='';
  eend=''
  evenue=''
  emps=[{eventId:1001, eventName:'diwali',eventdesc:'Good', eventsdate:'20-03-2020', eventedate:'20-03-2020', eventstrttime:'17:05', eventendtime:'17:05',eventvenue:'Floor1'},
  
]

  constructor() {
    
   }

  ngOnInit(): void {
  }
  add(){
    this.emps.push({eventId:this.eid,eventName:this.ename,eventdesc:this.edesc,eventsdate:this.esdate,eventstrttime:this.estrt,eventedate:this.eedate,eventendtime:this.eend,eventvenue:this.evenue})
  }

}
