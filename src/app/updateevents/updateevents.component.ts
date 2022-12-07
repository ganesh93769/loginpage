import { Component, OnInit } from '@angular/core';
import { HttpClientService,Event } from '../http-client.service';

@Component({
  selector: 'app-updateevents',
  templateUrl: './updateevents.component.html',
  styleUrls: ['./updateevents.component.css']
})
export class UpdateeventsComponent implements OnInit  {
  event: Event = new Event(0,"","","","","","","");
  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(): void {
  }
  updateEvent():void{
    this.httpClientService.updateEvent(this.event).subscribe(data =>{
      alert("Event updated")
    });
  };

}