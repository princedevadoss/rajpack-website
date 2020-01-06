import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceModalService {
  private contentModal = new Subject<any>();
  private imageModal = new Subject<any>();
  private formModal = new Subject<any>();

  sendImageModal(message: any) {
    this.imageModal.next({ text: message });
  }

  getImageModal(): Observable<any> {
    return this.imageModal.asObservable();
  }

 sendContentModal(message: any) {
    this.contentModal.next({ text: message });
 }

 getContentModal(): Observable<any> {
    return this.contentModal.asObservable();
 }

 sendFormModal(message: any) {
  this.formModal.next({ text: message });
}

getFormModal(): Observable<any> {
  return this.formModal.asObservable();
}
}
