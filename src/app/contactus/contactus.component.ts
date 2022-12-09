import { Component, OnInit } from '@angular/core';
import { Contact, HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contact: Contact = new Contact(0,"","","");
  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(): void {
  }
  createContact():void{
    this.httpClientService.createContact(this.contact).subscribe(data =>{
      alert(" Submitted ")
    });
  };

}