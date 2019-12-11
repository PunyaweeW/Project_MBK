import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'; 

@Injectable({providedIn :'root'})
export class DataService {
 private subject = new Subject<any>();
 
 sendMessage(message: string){
   console.log("new massage",message)
   this.subject.next(message);
 }
 clearMessages(){
   this.subject.next();
 }
 getMessage(): Observable<any>{
  console.log("update");
  return this.subject.asObservable();
 }
}