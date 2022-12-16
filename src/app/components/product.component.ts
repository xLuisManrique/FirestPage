import { Component,
        Input,
        Output,
        EventEmitter,
        OnChanges,
        SimpleChanges, 
        OnInit,
        DoCheck,
        OnDestroy} from '@angular/core';

import { Product } from '../product.model'
import { CartService } from './../core/services/cart.service'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit, DoCheck, OnDestroy {

    @Input() product!: Product;

    @Output() addCarro: EventEmitter<any> = new EventEmitter();

    date = new Date(); 

    constructor(
        private cartService: CartService
    ) {
        console.log('1. constructor');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('2. ngOnChanges', changes);
    }

    ngOnInit(){
        console.log('3. ngOnInit');
    }

    ngDoCheck(){
        console.log('4. ngDoCheck');
    }


    ngOnDestroy(){
        console.log('5. ngOnDestroy');
    }

    addCarrito(){
        console.log('Agregar Compra');
        this.cartService.addCart(this.product);
    }
}