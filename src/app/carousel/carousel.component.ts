import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  bg1: string;
  bg2: String;
  bg3: String;


  constructor() {
    this.bg1 = '/assets/bkgrnd2.jpg';
    this.bg2 = '/assets/bkgrnd3.jpg';
    this.bg3 = '/assets/bkgrnd4.jpg';
  }
  ngOnInit() {
  }

}
