import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ){
    this.buildForm();
  }

  saveProduct(event: Event){
    event.preventDefault();
    if (this.form.valid){
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products'])
      });
    }
    
  }

  ngOnInit(){
    this.activateRoute.params.subscribe((params: Params)=> {
      this.id = params.id;
      this.productsService.getProduct(this.id)
      .subscribe(product =>{
        this.form.patchValue(product)
      });
    });
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      images: [''],
      description: ['', [Validators.required]],
    });
  }

  get priceField() {
    return this.form.get('price');
  }


}
