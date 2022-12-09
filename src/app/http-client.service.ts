import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Event{
  // static includes: string;
  // filter(arg0: (u: any) => boolean): User {
  //   throw new Error('Method not implemented.');
  // }
  constructor(
    public id:number,
    public event_name:string,
    public event_sdate:string,
    public event_edate:string,
    public event_stime:string,
    public event_etime:string,
    public event_venue:string,
    public description:string,
    
  ){}
}
export class Booking{
  // filter(arg0: (u: any) => boolean): User {
  //   throw new Error('Method not implemented.');
  // }
  constructor(
    public id:number,
    public u_name:string,
    public e_name:string,
    public b_date:string,
    
    
  ){}
}
export class Contact{
  // filter(arg0: (u: any) => boolean): User {
  //   throw new Error('Method not implemented.');
  // }
  constructor(
    public id:number,
    public uname:string,
    public email:string,
    public message:string,
    
    
  ){}
}
export class Feedback{
  // filter(arg0: (u: any) => boolean): User {
  //   throw new Error('Method not implemented.');
  // }
  constructor(
    public id:number,
    public uname:string,
    public email:string,
    public eventName:string,
    public webReview:number,
    public eventReview:number,
    public overallReview:number,
    public comments:string
    
    
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }
  getEvent(){
    console.log("test call");
    return this.httpClient.get<Event[]>('http://localhost:2023/apie/events');
  }
  public deleteEvent(event: Event){
    return this.httpClient.delete<Event>("http://localhost:2023/apie"+ "/"+event.id);
  }
  public createEvent(event:Event){
    return this.httpClient.post<Event>("http://localhost:2023/apie/event", event);
  }
  public updateEvent(event:Event){
    return this.httpClient.post<Event>("http://localhost:2023/apie/eventu", event);
  }
  public getEventById(event:Event){
    return this.httpClient.get<Event>("http://localhost:2023/apie"+ "/"+ event.id)
  }
  getBooking(){
    console.log("test call");
    return this.httpClient.get<Booking[]>('http://localhost:2023/apib/bookings');
  }
  public deleteBooking(booking: Booking){
    return this.httpClient.delete<Booking>("http://localhost:2023/apib"+ "/"+booking.id);
  }
  public createBooking(booking:Booking){
    return this.httpClient.post<Booking>("http://localhost:2023/apib/booking", booking);
  }
  public updateBooking(booking:Booking){
    return this.httpClient.post<Event>("http://localhost:2023/apib/bookingu", booking);
  }
  public getBookingById(booking:Booking){
    return this.httpClient.get<Event>("http://localhost:2023  /apib"+ "/"+ booking.id)
  }
  getConatct(){
    console.log("test call");
    return this.httpClient.get<Contact[]>('http://localhost:2023/apic/contacts');
  }
 
  public createContact(contact:Contact){
    return this.httpClient.post<Contact>("http://localhost:2023/apic/contact", contact);
  }
  getFeedback(){
    console.log("test call");
    return this.httpClient.get<Feedback[]>('http://localhost:2023/apif/feedback');
  }
 
  public createFeedback(feedback:Feedback){
    return this.httpClient.post<Feedback>("http://localhost:2023/apif/feedback", feedback);
  }
 
}
