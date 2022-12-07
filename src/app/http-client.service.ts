import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Event{
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

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }
  getEvent(){
    console.log("test call");
    return this.httpClient.get<Event[]>('http://localhost:2020/api/events');
  }
  public deleteEvent(event: Event){
    return this.httpClient.delete<Event>("http://localhost:2020/api"+ "/"+event.id);
  }
  public createEvent(event:Event){
    return this.httpClient.post<Event>("http://localhost:2020/api/event", event);
  }
  public updateEvent(event:Event){
    return this.httpClient.post<Event>("http://localhost:2020/api/eventu", event);
  }
  public getEventById(event:Event){
    return this.httpClient.get<Event>("http://localhost:2020/api"+ "/"+ event.id)
  }
}
