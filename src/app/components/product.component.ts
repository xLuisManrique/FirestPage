import { Component,
        Input,
        Output,
        EventEmitter,
        OnInit,
    } from '@angular/core';

import { Product } from '../product.model'
import { CartService } from './../core/services/cart.service'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements  OnInit {

    @Input() product!: Product;

    @Output() addCarro: EventEmitter<any> = new EventEmitter();

    date = new Date(); 

    constructor(
        private cartService: CartService
    ) {
    }


    ngOnInit(){
        console.log('3. ngOnInit');
    }


    addCarrito(){
        console.log('Agregar Compra');
        this.cartService.addCart(this.product);
    }
}