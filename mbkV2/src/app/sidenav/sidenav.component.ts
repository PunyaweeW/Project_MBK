import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataserviceService } from "../../app/dataservice.service";
import { getElementIndex } from '@syncfusion/ej2-angular-grids';
import { MbkApiService } from '../mbk-api.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {

  expand = false;
  notifyNO = 0;
  orderingNO = 0;
  message = "test";
  notiSubscription: Subscription;
  orderingSubscription: Subscription;

  menuitems = [
    { path: '', component: "แดชบอร์ด", icon: "dashboard", text: "dashboard", aId: "ancDashboard" },
    { path: 'notification', component: "แจ้งเตือน", icon: "notifications", text: "notification", aId: "ancNotification" },
    { path: 'ordering', component: "รายการรอรับอะไหล่", icon: "list_alt", text: "ordering", aId: "ancOrdering" },
    { path: 'addItem', component: "เพิ่มอะไหล่", icon: "add_box", text: "addItem", aId: "ancAddItem" },
    { path: 'stock', component: "คลังอะไหล่", icon: "store", text: "stock", aId: "ancStock" },
    { path: 'log', component: "ล็อก", icon: "history", text: "log", aId: "anclog" }

  ];
  constructor(private dataService: DataserviceService, private mbkApiService: MbkApiService) {

  }

  ngOnInit() {
    //this.mbkApiService.reconnect().subscribe((part: any) => { });
    var autoSaveInterval = setInterval(() => { console.log('refresh api'); this.mbkApiService.reconnect().subscribe((part: any) => { }) }, 300000);
    this.notiSubscription = this.dataService.getNoti().subscribe(notiNo => {
      console.log("fetch notifications")
      this.notifyNO = notiNo;
    });
    this.orderingSubscription = this.dataService.getOrdering().subscribe(numberOrdering => {
      console.log("fetch ordering")
      this.orderingNO = numberOrdering;
    });
    console.log("app started")


  }
  ngAfterViewInit(): void {
    //tmepolary
    //load notification and ordering component first
    // console.log("Method not implemented.");
    //var anchorNoti = <HTMLAnchorElement>document.getElementById("ancNotification");
    // var anchorOrder =<HTMLAnchorElement>document.getElementById("ancOrdering");
    // var anchorDashboard =<HTMLAnchorElement>document.getElementById("ancDashboard");
    // console.log(anchorNoti.id)
    // anchorNoti.click();
    // anchorOrder.click();
    // anchorDashboard.click();
  }
}
