import { Component, OnInit, ViewChild } from '@angular/core';
import { MbkApiService } from '../mbk-api.service';
import { closest } from '@syncfusion/ej2-base';

import { PageSettingsModel, RowSelectEventArgs, click, Grid } from '@syncfusion/ej2-grids';
import { CommandModel, Column, SearchSettingsModel, IEditCell, GridComponent, IRow, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
@Component({
  selector: 'app-stockpage',
  templateUrl: './stockpage.component.html',
  styleUrls: ['./stockpage.component.scss']
})
export class StockpageComponent implements OnInit {

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
  ////////////////////////////
  selectedInd: any;
  sourceRow: any;
  constructor(private mbkApi: MbkApiService) {
  }

  ngOnInit() {
    //fetch part information
    this.mbkApi.readParts().subscribe((part: any) => {
      console.log(part)
      this.partData = part;

    });
    //grid setting 
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true }; // edit setting
    this.searchSettings = { fields: ['barcode', 'name', 'brand'] };// search setting
    //this.commands = [{ buttonOption: { content: 'Details', cssClass: 'e-flat', click: this.save.bind(this) } }]; //individual command not use , remove later
    this.sortOptions = {
      columns: [{ field: 'barcode', direction: 'Descending' }, { field: 'name', direction: 'Descending' },// sort setting
      { field: 'brand', direction: 'Descending' }, { field: 'version', direction: 'Descending' },
      { field: 'purchase', direction: 'Descending' }, { field: 'price', direction: 'Descending' },
      { field: 'numberOf', direction: 'Descending' }, { field: 'sales', direction: 'Descending' },
      { field: 'threshold', direction: 'Descending' }]
    };
    this.toolbar = ['Update', 'Cancel', 'Search'];
  }

  //update amount
  update() {
    /* let selectedrowindex: number[] = this.gridView.getSelectedRowIndexes();  // get the selected row indexes.
    let selectedIndex = selectedrowindex[0]    
    let selectedrecords: Element[] = this.gridView.getSelectedRows();
    let selectedrecord = selectedrecords[0];
    let selectedData = this.gridView.getRowByIndex(0);
    let data = this.gridView.getRowObjectFromUID("grid-row 11"); */
    let data = this.selectedRow;
    let groupname = "";
    let selectedRowData = this.gridView.getRowByIndex(this.selectedInd);
    let selectedRowDatas = this.gridView.getRowByIndex(this.selectedInd);

    this.selectedRow = selectedRowData;
    let collectionData = selectedRowData.children
    //console.log(collectionData);
    //console.log(collectionData[0].innerHTML);
    var groupMap = collectionData[1].innerHTML;
    if (groupMap == "อะไหล่ภายใน") {
      groupMap = "01";
    } else if (groupMap == "ระบบไฟฟ้า") {
      groupMap = "02";
    } else if (groupMap == "อะไหล่ภายนอก") {
      groupMap = "03";
    } else if (groupMap == "อะไหล่ทั่วไป") {
      groupMap = "04";
    }

    let updatedPart = {
      "grouId": groupMap,
      "barcode": collectionData[0].innerHTML,
      "name": collectionData[2].innerHTML,
      "brand": collectionData[3].innerHTML,
      "version": collectionData[4].innerHTML,
      "purchase": collectionData[5].innerHTML,
      "price": collectionData[6].innerHTML,
      "numberOf": collectionData[7].innerHTML,
      "sales": collectionData[8].innerHTML,
      "threshold": collectionData[9].innerHTML
    }
    console.log(updatedPart)
    //update part 
    this.mbkApi.updatePart(updatedPart).subscribe((part: any) => { });
    //add log to log table
    var newLog = {
      "groupId": groupMap,
      "barcode": collectionData[0].innerHTML,
      "actionId": "40"
    }
    console.log(newLog)
    this.mbkApi.createLog(newLog).subscribe((log: any) => { });
  }

  save(args: Event): void {
    //console.log(args.target)
    this.sourceRow = args;
    try {
      let rowObj: IRow<Column> = this.gridView.getRowObjectFromUID(closest(<Element>args.target, '.e-row').getAttribute('data-uid'));
      let data: Object = rowObj.data;
      this.selectedRow = data
      this.selectedInd = rowObj.index;
      //console.log(rowObj.index);

      let sel = this.gridView.getRowByIndex(this.selectedInd);
      //  console.log(this.selectedRow)
      // console.log(sel)
    } catch (err) {

    }


    //this.apiService.updatePart(data["group"],data["code"],data["name"],data["brand"],data["version"],data["purchase"],data["price"],data["number_of"],data["sales"]);
  }

}