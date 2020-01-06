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
  public openForm: boolean;
  public subscription: any;
  public setMaxHeight: Object;
  public contents : Array<Object>;
  public image : Object;
  public form: Object;

  constructor(private data: ServiceModalService) {
    this.openContent = false;
    this.openImage = false;
    this.openModal = false;
    this.openForm = false;
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
    this.subscription = this.data.getFormModal().subscribe(message => {
      this.form = message.text;
      this.openModal = true;
      this.openForm = true;
      if (this.form['type'] === 'enquiry') {
        this.setMaxHeight = {height: '620px'};
      }
      else {
        this.setMaxHeight = {height: '470px'};
      }
    });
  }

  closeAll() {
    this.openModal=false;
    this.openImage=false;
    this.openContent=false;
    this.openForm=false;
    this.setMaxHeight=0;
  }

  handleResponse() {
    this.closeAll();
  }

}
