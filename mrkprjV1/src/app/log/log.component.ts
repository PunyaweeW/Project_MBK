import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {logs} from '../logObj';
import { ToolbarItems, SearchSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  public logging : logs[];
  public sortSetting: Object;
  constructor(private apiService: ApiService) { }
  public toolbar: ToolbarItems[];
  public searchSetting: SearchSettingsModel;

  ngOnInit() {
    this.apiService.readLog().subscribe((logging: logs[])=>{
      this.logging = logging;
      console.log(this.logging);
      
    })
    this.sortSetting = { columns: [{ field: 'timestamp', direction: 'Ascending' }] };
    this.toolbar = ['Search'];
    this.searchSetting = {fields:['timestamp']}
  }

}
