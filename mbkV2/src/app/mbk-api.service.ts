import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Part } from './part';
import { Observable, Subject } from 'rxjs';
import { log } from './log';
@Injectable({
  providedIn: 'root'
})
export class MbkApiService implements OnInit {
  //header type for calling api
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  //subject object 
  private subject = new Subject<any>();
  //api server path
  API_SERVER = "http://137.116.130.1:3000"



  constructor(private httpClient: HttpClient) { }
 
  ngOnInit(): void {
  }
  //update part
  updatePart(part) {
    var partToUpdate = part;
    return this.httpClient.put<any[]>(this.API_SERVER + '/part', partToUpdate, { headers: this.headers });

  }
  //get all part
  readParts(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.API_SERVER + '/parts');
  }
  //get specific part by barcode  
  readByBarcode(barcode): Observable<any[]> {
    let url = this.API_SERVER + '/part/barcode/' + barcode;
    console.log(url);
    return this.httpClient.get<any[]>(url);
  }
  readByStatus(status): Observable<any[]> {
    let url = this.API_SERVER + '/part/status/' + status;
    console.log(url);
    return this.httpClient.get<any[]>(url);
  }
  createPart(part): Observable<any[]> {
    var newPart = part;
    return this.httpClient.post<any[]>(this.API_SERVER + '/part', newPart, { headers: this.headers });
  }
  readLoggings(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.API_SERVER + '/loggings');
  }

  createLog(log): Observable<any[]> {
    var newLog = log;
    return this.httpClient.post<any[]>(this.API_SERVER + '/logging', newLog, { headers: this.headers });

  }
  getSales(duration): Observable<any[]> {
    
    return this.httpClient.get<any[]>(this.API_SERVER + '/sales/'+duration.startDate+'/'+duration.endDate);
  }
  reconnect() : Observable<any[]> {
    return this.httpClient.get<any[]>(this.API_SERVER + '/group');
  }
}