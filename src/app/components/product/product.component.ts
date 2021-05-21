import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;
  @Output() productClick: EventEmitter<any>=new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  addCarro(){
    console.log('se añadio');
    this.productClick.emit(this.product.id)
  }
  

}
