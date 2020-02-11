import { Component, OnInit } from '@angular/core';
import { DataserviceService } from "../../app/dataservice.service"
import { MbkApiService } from '../mbk-api.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.scss']
})
export class OrderingComponent implements OnInit {
  orders: any;
  orderTrigger: Subscription;
  triggerO: any;
  constructor(private dataService: DataserviceService, private mbkApiService: MbkApiService) {
    this.orderTrigger = this.dataService.getTrigger().subscribe(trigger => {
      console.log("fetch trigger")
      if (trigger == "1") {
        this.mbkApiService.readByStatus("200").subscribe((orders: any) => {
          this.orders = orders;
          this.sendOrdering(this.orders.length);
        });
      }
    });

  }

  ngOnInit() {
    // this.notifications = [
    //   { "groupId": "01", "barcode": "000000", "name": "A", "brand": "B", "version": "V", "numberOf": 3, "status": "300", "order": 0, "price": 45, "purchase": 35, "threshold": 5, "sales": 2 },
    //   { "groupId": "01", "barcode": "000001", "name": "A", "brand": "B", "version": "V", "numberOf": 3, "status": "300", "order": 0, "price": 45, "purchase": 35, "threshold": 5, "sales": 2 }
    // ];

    this.mbkApiService.readByStatus("200").subscribe((part: any) => {
      this.orders = part;
      var content = <HTMLElement>document.getElementById('content');
      console.log(this.orders);
      this.sendOrdering(this.orders.length);
      if (this.orders.length == 0) {
        content.innerHTML = "ไม่มีอะไหล่ที่อยู่ระหว่างการสั่งซื้อ";
      }
    });
    console.log(this.orders);

  }

 
  orderAccept(order){
 
     var remainOrder = 0 ;
    var importNumber = Number(order.orderNum);
    var remains = Number(order.numberOf);
    var inputImport = <HTMLInputElement>document.getElementById('number '+ order.barcode);
    var importNumber = Number(inputImport.value);
    var sumUp = 0;
    console.log("import "+importNumber);
    console.log("ordering "+order.orderNum);
    //calculate remaining orders
    remainOrder = Number(order.orderNum) - Number(importNumber);
    
    if(remainOrder <= 0){
      console.log("done")
      console.log(remainOrder)
      sumUp = Number(order.numberOf) + Number(importNumber);
      console.log("current",sumUp)
      var receivedpart = order;
      receivedpart.orderNum = 0;
      receivedpart.numberOf = sumUp;
      receivedpart.status = "100";
      this.mbkApiService.updatePart(receivedpart).subscribe((part:any)=>{});
<<<<<<< HEAD
      var newLog = {
        "groupId": order.groupId,
        "barcode": order.barcode,
        "actionId": "30"
      }
      console.log(newLog)
      this.mbkApiService.createLog(newLog).subscribe((log: any) => { });
=======
>>>>>>> 2085d0a14d962a4a162ca8f56586236f80fcc4f9
      for (var i = 0; i < this.orders.length; i++) {
        if (this.orders[i].barcode == order.barcode) {
          this.orders.splice(i, 1);  //delete from notification array
        }
      }
      this.sendOrdering(this.orders.length);
<<<<<<< HEAD
    
=======
>>>>>>> 2085d0a14d962a4a162ca8f56586236f80fcc4f9
    }
    else{
      console.log("remain")
      console.log(remainOrder)  
      sumUp = Number(order.numberOf) + Number(importNumber);
      console.log("current",sumUp)
      var receivedpart = order;
      order.orderNum = remainOrder;
      receivedpart.numberOf = sumUp;
<<<<<<< HEAD
      receivedpart.status = "200";
      this.mbkApiService.updatePart(receivedpart).subscribe((part:any)=>{});
      //add log 
      var newLog = {
        "groupId": order.groupId,
        "barcode": order.barcode,
        "actionId": "30"
      }
      console.log(newLog)
      this.mbkApiService.createLog(newLog).subscribe((log: any) => { });
=======
      receivedpart.status = "100";
 
 
>>>>>>> 2085d0a14d962a4a162ca8f56586236f80fcc4f9
    }
    //this.mbkApiService.updatePart(receivedpart).subscribe((part:any)=>{});
  
  
  
    /* for (var i = 0; i < this.orders.length; i++) {
      if (this.orders[i].barcode == order.barcode) {
        this.orders.splice(i, 1);  //delete from notification array
      }
    }
    this.sendOrdering(this.orders.length); */
  
  
  }
  //send number of pending order
  sendOrdering(numberOfOrders): void {
    // send message to subscribers via observable subject
    this.dataService.sendOrdering(numberOfOrders);
  }

  disableSpan(orderspan) {
    var span = <HTMLElement>document.getElementById(orderspan);
    span.style.display = "none";
  }
  orderActive(order, orderspan) {
  
    var span = <HTMLElement>document.getElementById(orderspan);
    span.style.display = "block";




  }
}
