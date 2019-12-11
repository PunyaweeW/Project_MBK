import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [DataService],
  template: '{{message}}'

})
export class ChildComponent implements OnInit {
  message:string;
  constructor(private _data: DataService) {
     
  } 

  ngOnInit() {
  
  }

}
