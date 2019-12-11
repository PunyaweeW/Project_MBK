import { Component, OnInit ,Input,Output,EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import {SideNavComponent} from "../side-nav/side-nav.component";
import { DataService } from "../data.service";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  providers: [DataService]
 })

export class NotificationComponent implements OnInit {
 //keep number of each of sparepart
 amounts : any[];
 //keep notifications
 public notifications: any[];
 //message:string;
 //sideNavComponent : SideNavComponent = new SideNavComponent(  this.apiService   ,  this.dataService   );
  
 
  public getnotifications(): any[] {
    return this.notifications;
  }
  public setnotifications(value: any[]) {
    this.notifications = value; 
  }
  
   constructor(private apiService: ApiService,private dataService: DataService, public router: Router) { 
      
   }
  
 //clear notification
 //delete selected notification  
 clearNotification(notification){
    var i =0
    this.notifications = JSON.parse(localStorage.getItem("NotiList"));
   for(i;i<this.notifications.length;i++){
    if(this.notifications[i].code == notification.code){
      this.notifications.splice(i,1);  //delete from notification array
    }
    }
   console.log(this.notifications);
   localStorage.setItem("NotiList",JSON.stringify(this.notifications))
   var numberOfNoti = this.notifications.length;
    localStorage.setItem("NotifyNO",numberOfNoti.toString() );
      }
//end of clearNotification()
  
 // on initialization get notiofication list from local storage
  ngOnInit() {
     let notification = JSON.parse(localStorage.getItem("NotiList"));
     console.log(notification);
     this.notifications = notification;
      
    }
 //generate notification list
  notify(){
/*   let notifications = [];
  var i =0;
for(i = 0 ; i< this.amounts.length;i++){
if(!notifications.includes(this.amounts[i].code)){
  if(this.amounts[i].amount <= 3){
    var code = this.amounts[i].code
   
    notifications.push( {"code":code , 
                        "amount":this.amounts[i].amount});

  }
 }

}
console.log(notifications);
return notifications; */
}
 /*  go(val) {
    let  NavigationExtras : NavigationExtras = {
      state: {numNotify : val}
    }
    this.router.navigate(['/SideNav'], NavigationExtras);
  }  */

}
