import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }
  
  private subject = new   Subject<any>();

  sendMessage(message: string) {
    console.log("publish", message);
      this.subject.next(message);
  }

  clearMessages() {
      
  }

  getMessage(): Observable<any> {
    console.log("fetch message")
    console.log(this.subject.asObservable())
      return this.subject.asObservable();
  }
}
