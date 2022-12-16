import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ProductsService } from './../../../core/services/products/products.service';
import { finalize  } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private stogare: AngularFireStorage
  ){
    this.buildForm();
  }

  saveProduct(event: Event){
    event.preventDefault();
    if (this.form.valid){
      const product = this.form.value;
      this.productsService.createProduct(product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['/admin/products'])
      });
    }
    
  }

  ngOnInit(){}

  uploadFile(event){
    const file = event.target.files[0];
    const dir = 'images';
    const fileRef = this.stogare.ref(dir);
    const task = this.stogare.upload(dir, file);

    task.snapshotChanges().pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          this.form.get('image').setValue(url);
        })
      })
      ).subscribe;
  }


  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      images: [''],
      description: ['', [Validators.required]],
    });
  }

  get priceField(){
    return this.form.get('price');
  }

}
