import { Component, OnInit } from '@angular/core';
import { DataserviceService } from "../../app/dataservice.service"
import { NumericEditCell, columnSelectionBegin } from '@syncfusion/ej2-angular-grids';
import { not } from '@angular/compiler/src/output/output_ast';
import { MbkApiService } from '../mbk-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notifications: any;
  notiTrigger: Subscription;

  constructor(private dataService: DataserviceService, private mbkApiService: MbkApiService) {
   console.log("notification has created");
    this.dataService.getNotiTrigger().subscribe((trigger: boolean) => {
      if (trigger) {
        console.log("notitrig!")
        this.ngOnInit();
      }
    })
  }

  ngOnInit() {
    // this.notifications = [
    //   { "groupId": "01", "barcode": "000000", "name": "A", "brand": "B", "version": "V", "numberOf": 3, "status": "300", "order": 0, "price": 45, "purchase": 35, "threshold": 5, "sales": 2 },
    //   { "groupId": "01", "barcode": "000001", "name": "A", "brand": "B", "version": "V", "numberOf": 3, "status": "300", "order": 0, "price": 45, "purchase": 35, "threshold": 5, "sales": 2 }
    // ];

    this.mbkApiService.readByStatus("300").subscribe((part: any) => {
      this.notifications = part;
      var content = <HTMLElement>document.getElementById('content');
      console.log(this.notifications);
      this.sendNotification(this.notifications.length)
      if (this.notifications.length == 0) {
        content.innerHTML = "ไม่มีอะไหล่ที่มียอดต่ำกว่ากำหนด";
      }
    });

  }
  showNoNotification() {
    var content = <HTMLElement>document.getElementById('content');
    if (this.notifications.length == 0) {
      content.innerHTML = "ไม่มีอะไหล่ที่มียอดต่ำกว่ากำหนด";
    }
  }
  //disable span for each notification card
  disableSpan(orderspan) {
    var span = <HTMLElement>document.getElementById(orderspan);
    span.style.display = "none";
  }
  orderActive(notification, orderspan) {
    console.log(notification);
    console.log(orderspan)
    console.log(this.notifications.length);
    var span = <HTMLElement>document.getElementById(orderspan);
    span.style.display = "block";




  }
  //oder part
  order(notification) {
    var numberInput = <HTMLInputElement>document.getElementById('number ' + notification.barcode);
    var threshold = Number(notification.threshold);
    var remains = Number(notification.numberOf);
    var numberToOrder;
    var regExp = new RegExp(/[0-9]|\./);
    var validNumber = (regExp.test(numberInput.value));
    if (!validNumber) {
      alert('กรุณาระบุค่าที่เป็นตัวเลข');
    } else {
      numberToOrder = Number(numberInput.value);
      if (numberToOrder <= 0) {
        alert('กรุณาระบุจำนวนที่มากกว่า 0 ')
      } else {
        if ((numberToOrder + remains) >= threshold) {
          console.log("part " + notification.barcode)
          console.log("threshold" + threshold)
          console.log("remains" + remains)
          console.log("order" + numberToOrder)
          console.log("sum" + (numberToOrder + remains))
          alert('สามารถสั่งซื้อได้ในจำนวนดังกล่าวได้ ยอดรวมถึงยอดขั้นต่ำ ');
          var orderedPart = notification;
          orderedPart.status = "200"; //set
          orderedPart.orderNum = numberToOrder; //set number of part to be ordered
          console.log(orderedPart);
          this.mbkApiService.updatePart(orderedPart).subscribe((part: any) => { });
          var newLog = {
            "groupId": orderedPart.group,
            "barcode": orderedPart.barcode,
            "actionId": "10"
          }
          this.mbkApiService.createLog(newLog).subscribe((log:any) => {});
          for (var i = 0; i < this.notifications.length; i++) {
            if (this.notifications[i].barcode == notification.barcode) {
              this.notifications.splice(i, 1);  //delete from notification array
            }
          }
          this.showNoNotification();
          this.sendNotification(this.notifications.length);
          this.dataService.sendTrigger("1");

        } else if ((numberToOrder + remains) < threshold) {
          console.log("part " + notification.barcode)
          console.log("threshold" + threshold)
          console.log("remains" + remains)
          console.log("order" + numberToOrder)
          console.log("sum" + (numberToOrder + remains))

          alert('ยอดรวมยังต่ำกว่ายอดขั้นต่ำ');

        }
      }
    }


  }
  //send number of notification
  sendNotification(numberOfNotifications): void {
    // send message to subscribers via observable subject
    this.dataService.sendNoti(numberOfNotifications);
  }
}
