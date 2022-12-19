import { Component, OnInit } from '@angular/core';
import { ContactscriptService } from './../cargar-scripts/contactscript.service';





@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  name: string;
  email: string;
  message: string;

 

  constructor(){}
  ngOnInit(){}


  submitForm(){
  const message = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
  alert(message);
}




}

