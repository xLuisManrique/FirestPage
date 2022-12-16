import { Component, OnInit } from '@angular/core';
import { Product } from './../../../product.model';
import { CartService } from './../../../core/services/cart.service'
import {FormBuilder, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


/**
 * @title Stepper responsive
 */
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;


  constructor(
    private cartService: CartService,
    private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver
  ) {
    this.products$ = this.cartService.cart$;
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;


  ngOnInit(){
  }


}
