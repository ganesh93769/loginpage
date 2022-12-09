import { Component, OnInit } from '@angular/core';
import { HttpClientService, Feedback } from '../http-client.service';

@Component({
  selector: 'app-viewfeedbacks',
  templateUrl: './viewfeedbacks.component.html',
  styleUrls: ['./viewfeedbacks.component.css']
})
export class ViewfeedbacksComponent implements OnInit {
  feedback:Feedback[]=[];
  constructor(
    private httpClientService:HttpClientService
  ) { }
  ngOnInit() {
    this.httpClientService.getFeedback().subscribe(
     response =>{this.feedback=response;},
    );

}
// deleteEvent(event: Event): void {
//   this.httpClientService.deleteEvent(event)
//     .subscribe( data => {
//       this.event = this.event.filter(u => u !== event);
//     })
// };
}

