import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  uname='';
ename='';
edate='';
email='';

emps=[{ userName:'Ganesh',eventName:'diwali', eventdate:'Good',Email:'ganesh@gmail.com'},

]

constructor() { }

ngOnInit(): void {
}
add(){
  this.emps.push({userName:this.uname,eventName:this.ename,eventdate:this.edate,Email:this.email})
}

}
