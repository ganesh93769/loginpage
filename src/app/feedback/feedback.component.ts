import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Feedback, HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit  {
  feedback: Feedback = new Feedback(0,"","","",0,0,0,"");
  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(): void {
  }
  createFeedback():void{
    this.httpClientService.createFeedback(this.feedback).subscribe(data =>{
      Swal.fire("Thank you",'Feedback Submitted succesfully','success')
    });
  };

}