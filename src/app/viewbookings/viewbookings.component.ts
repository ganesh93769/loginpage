import { Component, OnInit } from '@angular/core';

import { HttpClientService, Booking } from '../http-client.service';

@Component({
  selector: 'app-viewbookings',
  templateUrl: './viewbookings.component.html',
  styleUrls: ['./viewbookings.component.css']
})
export class ViewbookingsComponent implements OnInit {
  booking:Booking[]=[];
  constructor(
    private httpClientService:HttpClientService
  ) { }
  ngOnInit() {
    this.httpClientService.getBooking().subscribe(
     response =>{this.booking=response;},
    );

}
// deleteEvent(event: Event): void {
//   this.httpClientService.deleteEvent(event)
//     .subscribe( data => {
//       this.event = this.event.filter(u => u !== event);
//     })
// };
}