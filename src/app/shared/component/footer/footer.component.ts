import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(){
    this.emailField = new FormControl('',
    [
    Validators.required,
    Validators.email
    ]);
  }

  ngOnInit(){}

  sendEmail(){
    if (this.emailField.valid){
      console.log(this.emailField.value);
    }
  }

}
