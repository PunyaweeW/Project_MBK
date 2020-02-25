import { Component, OnInit, ViewChild } from '@angular/core';
import { MbkApiService } from '../mbk-api.service';

import { PageSettingsModel, RowSelectEventArgs, click, Grid } from '@syncfusion/ej2-grids';
import { CommandModel, Column, SearchSettingsModel, IEditCell, GridComponent, IRow, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  logData: any;
  //these viables are for grid controls
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public elem: HTMLElement;
  public dpParams: IEditCell;
  public commands: CommandModel[];
  public sortOptions: Object;
  public searchSettings: SearchSettingsModel;
  public partData: Object[];
  public selectedRow: any;
  @ViewChild('gridView', { static: false })
  public gridView: GridComponent;
  public pageSettings: PageSettingsModel;

  //constructor
  constructor(private mbkApiService: MbkApiService) {
    //grid setting 
    this.searchSettings = { fields: ['name', 'brand', 'datetime', 'actionName'] };// search setting
    //this.commands = [{ buttonOption: { content: 'Details', cssClass: 'e-flat', click: this.save.bind(this) } }]; //individual command not use , remove later
    this.sortOptions = {
      columns: [{ field: 'barcode', direction: 'Descending' }, { field: 'name', direction: 'Descending' },// sort setting
      { field: 'brand', direction: 'Descending' }, { field: 'version', direction: 'Descending' }]
    };
    this.toolbar = ['Search'];
  }

  ngOnInit() {
    this.mbkApiService.readLoggings().subscribe((log: any) => { this.logData = log; console.log(this.logData) });
    this.pageSettings = {pageCount:3, pageSize: 12 };
  }

}
