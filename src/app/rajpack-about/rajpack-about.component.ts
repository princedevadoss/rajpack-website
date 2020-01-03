import { Component, OnInit, HostListener, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ServiceModalService } from '../modal/service-modal.service';

@Component({
  selector: 'app-rajpack-about',
  templateUrl: './rajpack-about.component.html',
  styleUrls: ['./rajpack-about.component.scss']
})
export class RajpackAboutComponent implements OnInit {

  public shortCardReached: boolean;
  public ownerReached: boolean;
  public cards: Array<Object>;
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset >= (this.cardPack.nativeElement.offsetTop-900)) {
      this.shortCardReached = false;
    }
    else {
      this.shortCardReached = true;
    }
    if (window.pageYOffset >= (this.cardPack.nativeElement.offsetTop-900)) {
      this.ownerReached = false;
    }
    else {
      this.ownerReached = true;
    }
  }

  @ViewChild('cardPack', {static: false}) cardPack: ElementRef;
  @ViewChild('owner', {static: false}) owner: ElementRef;
  constructor(private data: ServiceModalService) { 
    this.shortCardReached = true;
    this.ownerReached = true;
    this.cards = [
      {
        src: '../../assets/csa.png',
        name: 'Customer Satisfaction',
        opt: 1
      },
      {
        src: '../../assets/delivery.png',
        name: 'On Time Delivery',
        opt: 2
      },
      {
        src: '../../assets/currency.png',
        name: 'Affordable Price',
        opt: 3
      }
    ]
  }

  ngOnInit() {
  }

  triggerOpenState(state) {
    let data;
    switch (state) {
      case 1: 
        data = [
          {
            html: 'We are having around <span class="content-highlight">100+</span> happy customers',
            class: 'fa fa-user icon',
            left: true
          },
          {
            html: 'In that around <span class="content-highlight">80%</span> of them are doing business with us for past 10 years',
            class: 'fa fa-calendar icon',
            customStyle: {color: 'rgb(1, 132, 155)'}
          },
          {
            html: ' Not only the delivery and cost, support also matters which we do a lot',
            class: 'fa fa-volume-control-phone icon',
            customStyle: {color: 'rgb(2, 58, 143)'},
            left: true
          }
        ];
        break;
      case 2: 
        data = [
          {
            html: '<span class="content-highlight">Delivery Status</span> will be updated frequently',
            class: 'fa fa-clock-o icon',
            customStyle: {color : 'rgb(236, 2, 2)'},
            left: true
          },
          {
            html: '<span class="content-highlight">100% Guarantee</span> for all the products and will be delivered with full care',
            class: 'fa fa-thumbs-up icon',
            customStyle: {color: 'rgb(12, 131, 1)'}
          },
          {
            html: 'Have our own fleet of vehicle to ensure correct time delivery',
            class: 'fa fa-truck icon',
            customStyle: {color: 'rgb(45, 0, 117)'},
            left: true
          }
        ];
        break;
      case 3: 
        data = [
          {
            html: '<span class="content-highlight">Competitive Price</span> in the market',
            class: 'fa fa-usd icon',
            left: true,
            customStyle: {color: 'rgb(2, 58, 143)'}
          },
          {
            html: 'Optimum Price for the <span class="content-highlight">Product Quality</span>',
            class: 'fa fa-superpowers icon',
            customStyle: {color: 'rgb(236, 213, 2)'}
          },
          {
            html: 'Delivery and Wastage cost will <span class="content-highlight">not be charged</span>',
            class: 'fa fa-hand-peace-o icon',
            customStyle: {color: 'rgb(1, 189, 1)'},
            left: true
          }
        ];
        break;
    }
    this.data.sendContentModal(data);
  }

}
