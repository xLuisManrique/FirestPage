import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(){} // code
  ngOnInit() {} // code

  title = 'First App';

items = ['Metcon 8', 'Camiseta', 'Combo Crossfitter']

addItem(){
  this.items.push('New Item')
}

deleteItem(index: number){
  this.items.splice(index, 1);
}


}
