import { Component, OnInit } from '@angular/core';

 import{NgForm} from '@angular/forms';
 import { HttpClientService, Event } from '../http-client.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  event: Event = new Event(0,"","","","","","","");
  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(): void {
  }
  createEvent():void{
    this.httpClientService.createEvent(this.event).subscribe(data =>{
      alert("Event added")
    });
  };

}
