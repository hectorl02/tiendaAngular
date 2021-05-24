import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images:string[]=[
    'assets/images/uno.jpg',
    'assets/images/dos.jpg',
    'assets/images/tres.jpg',
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
