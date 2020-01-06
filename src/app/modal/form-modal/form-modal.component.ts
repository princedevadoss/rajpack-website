import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() form;
  @Output() onFormResponse: EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  sendRequest(type) {
    if (type === 'enquiry') {
      this.http.post('/app/enquiry', {
        name: this.form.data[0].value,
        email: this.form.data[1].value,
        contact: this.form.data[2].value,
        message: this.form.data[3].value,
      })
      .subscribe((data) => {
        this.onFormResponse.emit(data);
      });
    }
    else {
      this.http.post('/app/feedback', {
        email: this.form.data[0].value,
        comment: this.form.data[1].value,
      })
      .subscribe((data) => {
        this.onFormResponse.emit(data);
      });
    }
  }

}
