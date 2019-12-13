import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Part} from './parts';
import { Observable, from } from  'rxjs';
import {logs} from './logObj';
 import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'

})

export class ApiService {
  PHP_API_SERVER = "http://127.0.0.1:3000"
  constructor(private httpClient: HttpClient) {}
  
  readParts(): Observable<Part[]>{
    return this.httpClient.get<Part[]>('http://127.0.0.1:3000/parts');
  }
  readAPart(groupId,code): Observable<Part[]>{
    let url = 'http://127.0.0.1:3000/part/'+groupId+'/'+code;
    console.log(url);
    return this.httpClient.get<Part[]>(url);
  }
  readSales(): Observable<Part[]>{
    return this.httpClient.get<Part[]>('http://127.0.0.1:3000/parts');
  }
  readAmount(): Observable<Part[]>{
    return this.httpClient.get<Part[]>('http://127.0.0.1:3000/parts');
  }
  createPart(groupId,code,name,brand,version,purchase,price,numberOf): Observable<Part[]>{
     //var param = "table="+table+"&"+"groupId="+gid+"&"+"code="+pid+"&"+"name="+name+"&"+"brand="+brand+"&"+"version="+version+"&"+"purchase="+purchase+"&"+"price="+price+"&"+"amount="+amount;
     //var request = new XMLHttpRequest();
     //request.open("POST", 'http://127.0.0.1:8000/api/create.php?'+param, true);
     //request.send(null);
     //console.log('http://127.0.0.1:8000/api/create.php?'+param);
     var newPart = {
       "groupId" : groupId,
       "code": code,
       "name": name,
       "brand":brand,
       "version":version,
       "purchase":purchase,
       "price":price,
       "numberOf":numberOf,
       "sales": 0
       
     }
    return this.httpClient.post<Part[]>('http://127.0.0.1:3000/part/'+groupId,newPart);  
  
  }
 
  updateAmount(group,code,amount){
    var group = group;
    var code = code;
    var amount = amount;
    var param = "table="+group+"&"+"pid="+code+"&"+"numberOf="+amount;
    var url = 'http://127.0.0.1:8000/api/update.php?&func=update&';
    var request = new XMLHttpRequest();
    console.log(url+param)
    request.open("POST", url+param, true);
    request.send(null);
  }
  updatePart(groupId,code,name,brand,version,purchase,price,numberOf,sales){
    var group = groupId;
    var code = code;
    var amount = amount;
    var groupMap = [{data:"03",code:"externals"},{data:"00",code:"internals"},{data:"02",code:"electrics"},{data:"04",code:"generals"}];
    for(var i = 0; i< groupMap.length;i++){
      if(groupMap[i].data == group){
        group = groupMap[i].code;
      }
    }
    let partToUpdate = {
      "groupId":groupId,
      "code":code,
      "name":name,
      "brand":brand,
      "version":version,
      "purchase":purchase,
      "price":price,
      "numberOf": numberOf,
      "sales": sales
      
      }
    var param = groupId+"/"+code+"/"+name+"/"+brand+"/"+version+"/"+purchase+"/"+price+"/"+numberOf+"/"+sales;
    var url = 'http://127.0.0.1:3000/part/'+groupId+'/'+code;
    var request = new XMLHttpRequest();
    request.open("PUT", url);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify( partToUpdate));
 
  }

  readLog():Observable<logs[]>{
    return this.httpClient.get<logs[]>('http://127.0.0.1:3000/log');
  } 
  createLog(){
    
  }
}
