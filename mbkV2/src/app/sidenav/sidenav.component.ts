import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataserviceService } from "../../app/dataservice.service";
import { getElementIndex } from '@syncfusion/ej2-angular-grids';
<<<<<<< HEAD
import { MbkApiService } from '../mbk-api.service';

=======
>>>>>>> 2085d0a14d962a4a162ca8f56586236f80fcc4f9
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
<<<<<<< HEAD
export class SidenavComponent implements OnInit, AfterViewInit {

=======
export class SidenavComponent implements OnInit , AfterViewInit {
  
>>>>>>> 2085d0a14d962a4a162ca8f56586236f80fcc4f9
  expand = false;
  notifyNO = 0;
  orderingNO = 0;
  message = "test";
  notiSubscription: Subscription;
  orderingSubscription: Subscription;
<<<<<<< HEAD

  menuitems = [
    { path: '', component: "แดชบอร์ด", icon: "dashboard", text: "dashboard", aId: "ancDashboard" },
    { path: 'notification', component: "แจ้งเตือน", icon: "notifications", text: "notification", aId: "ancNotification" },
    { path: 'ordering', component: "สั่งซื้ออะไหล่", icon: "add_shopping_cart", text: "ordering", aId: "ancOrdering" },
    { path: 'addItem', component: "เพิ่มอะไหล่", icon: "add_box", text: "addItem", aId: "ancAddItem" },
    { path: 'stock', component: "คลังอะไหล่", icon: "store", text: "stock", aId: "ancStock" },
    { path: 'log', component: "ล็อก", icon: "history", text: "log", aId: "anclog" }

  ];
  constructor(private dataService: DataserviceService, private mbkApiService: MbkApiService) {

  }

  ngOnInit() {
    //this.mbkApiService.reconnect().subscribe((part: any) => { });
    var autoSaveInterval = setInterval(() => { console.log('refresh api'); this.mbkApiService.reconnect().subscribe((part: any) => { }) }, 300000);
=======

  menuitems = [
    { path: '', component: "แดชบอร์ด", icon: "dashboard", text: "dashboard", aId: "ancDashboard" },
    { path: 'notification', component: "แจ้งเตือน", icon: "notifications", text: "notification", aId: "ancNotification" },
    { path: 'ordering', component: "สั่งซื้ออะไหล่", icon: "add_shopping_cart", text: "ordering", aId: "ancOrdering" },
    { path: 'addItem', component: "เพิ่มอะไหล่", icon: "add_box", text: "addItem", aId: "ancAddItem" },
    { path: 'stock', component: "คลังอะไหล่", icon: "store", text: "stock", aId: "ancStock" },
    { path: 'log', component: "ล็อก", icon: "history", text: "log", aId: "anclog" }

  ];
  constructor(private dataService: DataserviceService) {
   
  }

  ngOnInit() {
>>>>>>> 2085d0a14d962a4a162ca8f56586236f80fcc4f9
    this.notiSubscription = this.dataService.getNoti().subscribe(notiNo => {
      console.log("fetch notifications")
      this.notifyNO = notiNo;
    });
    this.orderingSubscription = this.dataService.getOrdering().subscribe(numberOrdering => {
      console.log("fetch ordering")
      this.orderingNO = numberOrdering;
    });
<<<<<<< HEAD
    console.log("app started")

=======
  console.log("app started")
 
>>>>>>> 2085d0a14d962a4a162ca8f56586236f80fcc4f9

  }
  ngAfterViewInit(): void {
    //tmepolary
    //load notification and ordering component first
<<<<<<< HEAD
    // console.log("Method not implemented.");
    //var anchorNoti = <HTMLAnchorElement>document.getElementById("ancNotification");
    // var anchorOrder =<HTMLAnchorElement>document.getElementById("ancOrdering");
    // var anchorDashboard =<HTMLAnchorElement>document.getElementById("ancDashboard");
    // console.log(anchorNoti.id)
    // anchorNoti.click();
    // anchorOrder.click();
    // anchorDashboard.click();
=======
  // console.log("Method not implemented.");
   //var anchorNoti = <HTMLAnchorElement>document.getElementById("ancNotification");
  // var anchorOrder =<HTMLAnchorElement>document.getElementById("ancOrdering");
  // var anchorDashboard =<HTMLAnchorElement>document.getElementById("ancDashboard");
  // console.log(anchorNoti.id)
  // anchorNoti.click();
  // anchorOrder.click();
  // anchorDashboard.click();
>>>>>>> 2085d0a14d962a4a162ca8f56586236f80fcc4f9
  }
}
