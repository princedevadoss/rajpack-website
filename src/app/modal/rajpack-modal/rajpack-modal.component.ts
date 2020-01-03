import { Component, OnInit } from '@angular/core';
import { ServiceModalService } from '../service-modal.service';

@Component({
  selector: 'app-rajpack-modal',
  templateUrl: './rajpack-modal.component.html',
  styleUrls: ['./rajpack-modal.component.scss']
})
export class RajpackModalComponent implements OnInit {
  public openModal: boolean;
  public openContent: boolean;
  public openImage : boolean;
  public subscription: any;
  public setMaxHeight: Object;
  public contents : Array<Object>;
  public image : Object;

  constructor(private data: ServiceModalService) {
    this.openContent = false;
    this.openImage = false;
    this.openModal = false;
  }

  ngOnInit() {
    this.subscription = this.data.getContentModal().subscribe(message => {
      this.contents = message.text;
      this.openModal = true;
      this.openContent = true;
    });
    this.subscription = this.data.getImageModal().subscribe(message => {
      this.image = message.text;
      this.openModal = true;
      this.openImage = true;
      this.setMaxHeight = {height: '700px'};
    });
  }

}
