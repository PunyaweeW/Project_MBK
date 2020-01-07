import { Component, OnInit } from '@angular/core';
import { DataserviceService} from "../../app/dataservice.service"

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor( private dataService : DataserviceService) { }

  ngOnInit() {
  }
  sendNotification(): void {
    // send message to subscribers via observable subject
    this.dataService.sendMessage("Send");
}
}
