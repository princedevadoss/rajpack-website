import { Component, OnInit } from '@angular/core';
import { ServiceModalService } from '../modal/service-modal.service';

@Component({
  selector: 'app-float-icons',
  templateUrl: './float-icons.component.html',
  styleUrls: ['./float-icons.component.scss']
})
export class FloatIconsComponent implements OnInit {

  constructor(public data: ServiceModalService) { }

  ngOnInit() {
  }

  openTriggerState(option: string) {
    if (option === 'feedback') {
      this.data.sendFormModal({
        type: 'feedback',
        header: 'Write Us Your Feedback',
        data: [
          {
            label: 'Email Id',
            input: true,
            value: ''
          },
          {
            label: 'Comments',
            textarea: true,
            value: ''
          }
        ]
      });
    }
    else {
      this.data.sendFormModal({
        type: 'enquiry',
        header: 'Enquiry Form',
        data: [
          {
            label: 'Name',
            input: true,
            value: ''
          },
          {
            label: 'Email Id',
            input: true,
            value: ''
          },
          {
            label: 'Contact Number',
            input: true,
            value: ''
          },
          {
            label: 'Message',
            textarea: true,
            value: ''
          }
        ]
      });
    }
  }
}
