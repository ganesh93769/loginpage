import { Component, OnInit } from '@angular/core';
import { HttpClientService, Event } from '../http-client.service';

@Component({
  selector: 'app-viewevents',
  templateUrl: './viewevents.component.html',
  styleUrls: ['./viewevents.component.css']
})
export class VieweventsComponent implements OnInit {
  event:Event[]=[];
  constructor(
    private httpClientService:HttpClientService
  ) { }
  ngOnInit() {
    this.httpClientService.getEvent().subscribe(
     response =>{this.event=response;},
    );

}
deleteEvent(event: Event): void {
  this.httpClientService.deleteEvent(event)
    .subscribe( data => {
      this.event = this.event.filter(u => u !== event);
    })
};
}
