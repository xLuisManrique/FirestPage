import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import {ProductComponent } from "./components/product.component";
import { CartComponent } from './cart/cart.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from "@angular/material/form-field";
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from './../environments/environment'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ContactscriptService } from './cargar-scripts/contactscript.service'



@NgModule({
    declarations: [
        AppComponent,
        ProductsComponent,
        ContactComponent,
        ProductComponent,
        CartComponent,
        DemoComponent,
        PageNotFoundComponent,
        ProductDetailComponent,
        LayoutComponent,
        
        
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [ContactscriptService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        FormsModule,
        SharedModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFireStorageModule
    ]
})
export class AppModule { }
