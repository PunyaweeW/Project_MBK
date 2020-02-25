import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  private subject = new Subject<any>();
  private order = new Subject<any>();
  private orderTrigger = new Subject<any>();
  private notiTrigger = new Subject<any>();
  clearMessages() {

  }
  //trigger notification
  sendNotiTrigger(trigger: boolean){
    this.notiTrigger.next(trigger);
  }
  //get trigger for notification
  getNotiTrigger(): Observable<boolean> {
    console.log("fetch notification trigger")
    console.log(this.notiTrigger.asObservable())
    return this.notiTrigger.asObservable();
  }
  //sending number of notifications
  sendNoti(message: string) {
    console.log("publish", message);
    this.subject.next(message);
  }

  getNoti(): Observable<any> {
    console.log("fetch message")
    console.log(this.subject.asObservable())
    return this.subject.asObservable();
  }
  //sending number of orders
  sendOrdering(message: string) {
    console.log("publish", message);
    this.order.next(message);
  }

  getOrdering(): Observable<any> {
    console.log("fetch ordering")
    console.log(this.order.asObservable())
    return this.order.asObservable();
  }

  //trigger orderingComponent
  sendTrigger(message: string) {
    console.log("trigger: ", message);
    this.orderTrigger.next(message);
  }
  //send message to trig orderingComponent refresh 
  getTrigger(): Observable<any> {
    console.log("fetch ordering")
    console.log(this.orderTrigger.asObservable())
    return this.orderTrigger.asObservable();
  }
}
