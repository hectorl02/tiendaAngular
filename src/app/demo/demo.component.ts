import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'store';


  lista=['marco','hector','cristian','lucy'];

  potencia:number=0;


  addItem(){
    this.lista.push('nuevo item')
  }

  deleteItem(index:number){
    this.lista.splice(index,1);
  }


}
