import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  msg : string;

  constructor(public userEnq : UsersService){

  }

  ngOnInit():void {

  }

  doEnquiry(form:NgForm)
  {
    this.userEnq.userEnquiry(form.value).subscribe((data:string)=>{

      console.log(data);

      this.msg = data;


    },(error:any)=>{

      console.log(error);

      this.msg = "Your Message Sent Successfully...!";

      form.reset();
    });
  }
}
