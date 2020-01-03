import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import {ServiceModalService} from '../modal/service-modal.service';

@Component({
  selector: 'app-rajpack-machineries',
  templateUrl: './rajpack-machineries.component.html',
  styleUrls: ['./rajpack-machineries.component.scss']
})
export class RajpackMachineriesComponent implements OnInit {
  public hideGrid: boolean;
  public machineries: Array<Object>;
  @HostListener("window:scroll", [])
  onWindowScroll() {
    console.log(window.pageYOffset, this.grid.nativeElement.offsetTop-900);
    if (window.pageYOffset >= (this.grid.nativeElement.offsetTop-900)) {
      this.hideGrid = true;
    }
    else {
      this.hideGrid = false;
    }
  }

  @ViewChild('grid', {static: false}) grid: ElementRef;

  constructor(public data: ServiceModalService) { 
    this.hideGrid = false;
    this.machineries = [
      {
        url: '../../assets/machineries/corrugation.jpg',
        rotateType: 'rot-type1',
        type: 'type1',
        header: 'Corrugation Machine'
      },
      {
        url: '../../assets/machineries/cutter.jpg',
        rotateType: 'rot-type2',
        type: 'type2',
        header: 'Heavy Duty Cutting Machine'
      },
      {
        url: '../../assets/machineries/greasing.jpg',
        rotateType: 'rot-type3',
        type: 'type3',
        header: 'Greasing Machine'
      },
      {
        url: '../../assets/machineries/pasting.jpg',
        rotateType: 'rot-type4',
        type: 'type4',
        header: 'Pasting Machine'
      },
      {
        url: '../../assets/machineries/printing.jpg',
        rotateType: 'rot-type5',
        type: 'type5',
        header: 'Printing Machine'
      },
      {
        url: '../../assets/machineries/punching.jpg',
        rotateType: 'rot-type3',
        type: 'type6',
        header: 'Punching Machine'
      },
      {
        url: '../../assets/machineries/slotter.jpg',
        rotateType: 'rot-type2',
        type: 'type7',
        header: 'Slotting Machine'
      },
      {
        url: '../../assets/machineries/slotting.jpg',
        rotateType: 'rot-type1',
        type: 'type8',
        header: 'Heavy Duty Slotting Machine'
      },
      {
        url: '../../assets/machineries/stitching.jpg',
        rotateType: 'rot-type4',
        type: 'type1',
        header: 'Pinning Machine'
      }
    ]
  }

  ngOnInit() {
  }

  openImageModal(url: string, header: string) {
    this.data.sendImageModal({
      url: url,
      header: header
    });
  } 

}
