import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataserviceService} from "../../app/dataservice.service";
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
expand = false;
message = "test";
subscription : Subscription;
  menuitems = [
  {path: '', component:"Dashboard",icon:"home"},
  {path: 'notification' , component:"Notifications",icon:"home"},
  {path: 'addItem' , component:"New item",icon:"home"}
];
  constructor(private dataService : DataserviceService) {
  
   }

  ngOnInit() {
    this.subscription = this.dataService.getMessage().subscribe(message => {
      console.log("fetch")
      this.message = message;
     });
  }

}
