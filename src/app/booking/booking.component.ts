import { Component, OnInit } from '@angular/core';
import{NgForm, NgModel} from '@angular/forms';
import { HttpClientService, Event, Booking } from '../http-client.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit  {
  event:Event[]=[];
  booking: Booking = new Booking(0,"","","");
  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getEvent().subscribe(
     response =>{this.event=response;},
    );

}
  createBooking():void{
    if(this.booking.e_name != "diwali")
    {
      alert("wrong event")
    }
    else{
    this.httpClientService.createBooking(this.booking).subscribe(data =>{
      alert("Booking added")
    });
  };
}

}