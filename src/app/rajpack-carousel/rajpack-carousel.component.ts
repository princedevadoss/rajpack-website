import { Component, ElementRef, OnInit, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-rajpack-carousel',
  templateUrl: './rajpack-carousel.component.html',
  styleUrls: ['./rajpack-carousel.component.scss']
})
export class RajpackCarouselComponent implements OnInit {
  imgActive:  number;
  period: any;
  imgSrcs : Array<string>;
  
  constructor() {
    this.imgActive = 1;
  }

  ngOnInit() {
    this.imgSrcs = [
      '../../assets/image1.jpg',
      '../../assets/image2.jpg',
      '../../assets/image3.jpg',
      '../../assets/image4.jpg',
      '../../assets/image5.jpg'
    ]
  }

  ngAfterViewInit() {
    this.period = setInterval(this.changer, 4000);
  }

  imgPrevHandler() {
    this.changeImage(true);
  }

  imgNextHandler() {
    this.changeImage(false);
  }

  changer = () => {
    this.changeImage(false);
  }

  changeImage(next) {
    if (next) {
        this.imgActive++;
        if (this.imgActive >= (this.imgSrcs.length + 1)) {
          this.imgActive = 1;
        }
    }
    else {
      this.imgActive--;
      if (this.imgActive <= 0) {
        this.imgActive = this.imgSrcs.length;
      }
    }
    clearInterval(this.period);
    this.period = setInterval(this.changer, 4000);
  }
}
