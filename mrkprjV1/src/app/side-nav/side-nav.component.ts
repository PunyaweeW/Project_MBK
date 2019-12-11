import { OnInit,HostListener  } from '@angular/core';
import { Component,OnDestroy , Input, ViewChildren, AfterViewInit, ViewEncapsulation } from "@angular/core";
import { IgxNavigationDrawerComponent, flipTop } from "igniteui-angular";
import { ApiService } from '../api.service';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';
import {ChildComponent} from '../child/child.component';
import {NavigationExtras, ActivatedRoute,Router} from "@angular/router";
import {NotificationComponent} from '../notification/notification.component';
 
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  providers: [DataService],
  })



export class SideNavComponent implements OnInit, AfterViewInit     {

  // @Input() childExample:string;
  //myNums:number = 0;
  //messages: any[] = ["CC"];
  //subscription: Subscription;
  // message1:String;
  //notification : any[]; //
  //data : any;
  notifyNO: any; // keep tracking of number of notifications 
  
  //item infomation for side nav 
  public navItems = [
    { name: "account_circle", text: "Dashboard" ,path:'',icon:"dashboard"},
    { name: "error", text: "Notification",path:"/notify",icon:"notification_important" },
    { name: "group_work", text: "Stock" ,path:"/stock",icon:"list"},
    { name: "home", text: "Log",path:"/log",icon:"history" },
    { name: "view_carousel", text: "Add",path:"/additem",icon:"add_circle" },
    //{ name: "poll", text: "Report",path:"/report", icon:"receipt" } 
     
  ];

   constructor(private apiService: ApiService,private dataService: DataService ) {
   /*  this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state != null){
        this.data = this.router.getCurrentNavigation().extras.state.numNotify;
      }  
    }); */
   
  } 

  @ViewChildren('Notification') noti;
  //myTimer = setInterval(this.ngAfterViewInit, 5000);
          
  ngAfterViewInit() {
  
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
     this.show()
  }//global click event 


  //on initialization 
  ngOnInit() {
    this.notifyNO =  localStorage.getItem("NotifyNO"); //get number of notifications form local storage 
    let notifications = [];
    let remains = [];
    this.apiService.readParts().subscribe((numberOf : any[])=>{ // use api to read remains of each sparepart 
      remains = numberOf;
    //check if number of sparepart is less than 3 and not have been notified before 
    console.log(remains)
 
    var i = 0;
   for(var j = 0 ; j < 4 ; j++){
   for(i = 0 ; i < remains[j].length ; i++){
       if(!notifications.includes(remains[j][i]['code'])){
         if(remains[j][i]['numberOf'] <= 3){
           notifications.push( {"code":remains[j][i]['code'] , "name":remains[j][i]['name'],
          "brand":remains[j][i]['brand'],"version":remains[j][i]['version'],"numberOf":remains[j][i]['numberOf']});
          }
         }  
    }
  }
    console.log(JSON.stringify(notifications))
    localStorage.setItem("NotiList",JSON.stringify(notifications));
    console.log(JSON.stringify(notifications))
    localStorage.setItem("NotifyNO",notifications.length.toString());
    });
 
  }
   //to get and show current number of notifications
   show(){
         this.notifyNO =  Number(localStorage.getItem("NotifyNO"));
  
   }
  //controlling navigation side bar 
  //define navigation side bar component 
  public selected = "Avatar";
  public drawer: IgxNavigationDrawerComponent;
  //define state of navigation side bar 
  public drawerState = {
    miniTemplate: false,
    open: true,              
    pin: true
  };
 //hidden and open side navigation bar
  public navigate(item) {
    var workSpace = document.querySelector('.workSpace');
    var links = document.getElementsByClassName("linking");
    this.selected = item.text;
     
    if (this.drawer.pin) {
      this.drawer.open();
    }
   }
}


 


