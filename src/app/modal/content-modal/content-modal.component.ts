import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-modal',
  templateUrl: './content-modal.component.html',
  styleUrls: ['./content-modal.component.scss']
})
export class ContentModalComponent implements OnInit {
  @Input() contents;

  constructor() {
  }

  ngOnInit() {
  }

}
