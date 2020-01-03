import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {
  @Input() imageHeader;
  @Input() imageUrl;

  constructor() {
  }

  ngOnInit() {
  }

}
