import { Component, OnInit ,ViewChild,ViewChildren,AfterViewInit, QueryList} from '@angular/core';
import { ApiService } from '../api.service';
import { Part } from '../parts';
import {PageSettingsModel,RowSelectEventArgs , click ,Grid} from '@syncfusion/ej2-angular-grids';
import { CommandModel,Column,SearchSettingsModel ,IEditCell ,GridComponent,IRow,EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { closest } from '@syncfusion/ej2-base';
import { NgModel } from '@angular/forms';
import { DatePicker } from '@syncfusion/ej2-calendars';

@Component({
  selector: 'app-stockpage',
  templateUrl: './stockpage.component.html',
  styleUrls: ['./stockpage.component.css']
})
export class StockpageComponent implements OnInit, AfterViewInit {
  isLoading: boolean;
  //sperate each sparepart group information 
 public parts:  any[];
 public externals : any[] = [];
 public internals : any[] = [];
 public electrics : any[] = [];
 public generals : any[] = [];
 public brands: [];
 ///////////////////////
 //editable grid/
 public editSettings: EditSettingsModel;
 public toolbar: ToolbarItems[];
 public elem: HTMLElement;
 public datePickerObj: DatePicker;
 public dpParams: IEditCell;
 public commands: CommandModel[];
 public sortOptions: Object;
 public searchSettings: SearchSettingsModel;
 public partData: Object[];
 private selectedRow : any ;
 
  @ViewChild('gridView',{static : false})
 public gridView : GridComponent;
 public pageSettings: PageSettingsModel;
 ////////////////////////////
 ngAfterViewInit() {
  this.isLoading = false;
  var saveButton = <HTMLButtonElement>document.getElementById("saveButton");
  this.save.bind(saveButton);
 }
  selectedPart:  Part  = { gid :  null , code:null, pname:  null,brand: null,vers: null, purchase:null};
  public cardItems = [
    { name: "account_circle", text: "Dashboard" ,path:"/",icon:"dashboard"},
    { name: "error", text: "Notification",path:"/",icon:"notification_important" },
    { name: "group_work", text: "Stock" ,path:"/stock",icon:"list"},
    { name: "home", text: "Log",path:"/",icon:"history" },
    { name: "view_carousel", text: "Add",path:"/",icon:"add_circle" },

    { name: "poll", text: "Report",path:"/", icon:"receipt" }
     
  ];
  constructor(private apiService: ApiService) {    
  }

  ngOnInit() {
    //initial grid table// 
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true }; // edit setting
    this.searchSettings = {fields: ['code', 'name', 'brand']};// search setting
    this.commands = [{ buttonOption: { content: 'Details', cssClass: 'e-flat', click: this.save.bind(this) } }]; //individual command not use , remove later
    this.sortOptions = { columns: [{ field: 'code', direction: 'Descending' }, { field: 'name', direction: 'Descending' },// sort setting
    { field: 'brand', direction: 'Descending' },{ field: 'version', direction: 'Descending' },
    { field: 'purchase', direction: 'Descending' },{ field: 'price', direction: 'Descending' },
    { field: 'number_of', direction: 'Descending' },{ field: 'sales', direction: 'Descending' }] };
    this.toolbar = [ 'Update', 'Cancel','Search']; // toolbar
     //get sparepart information
     this.apiService.readParts().subscribe((parts: Part[])=>{
      this.parts = parts;
      this.internals = this.parts[0];
      this.electrics = this.parts[1];
      this.externals = this.parts[2];
      this.generals = this.parts[3];
      //console.log(this.parts);
   
       
      console.log(this.externals);
      console.log(this.internals);
      console.log(this.electrics);
      console.log(this.generals);
      this.partData = this.internals;
      console.log(this.partData);
    })
   
  /*   let grid: Grid = new Grid({
      dataSource: this.partData,
      searchSettings: this.searchSettings,
      allowSorting: true,
      editSettings: this.editSettings,
      toolbar: this.toolbar,
      selectionSettings: {type: 'Single'},
      columns: [
          { field: 'code', headerText: 'รหัสอะไหล่', textAlign: 'Right', width: 90 },
          { field: 'name', headerText: 'ชื่ออะไหล่', width: 90 },
          { field: 'brand', headerText: 'ยี่ห้อ', width: 90 },
          { field: 'version', headerText: 'รุ่น', width: 90 },
          { field: 'purchase', headerText: 'ราคาซื้อ', width: 90 },
          { field: 'price', headerText: 'ราคาขาย', width: 90 },
          { field: 'numberOf', headerText: 'ยอดคงเหลือ', width: 90 },
          { field: 'sales', headerText: 'ยอดขาย', width: 90 }

        ],
      height: 315,
      rowSelected: this.update
  }); */
   //grid.appendTo('#tableGrid');
  }
   
  //update amount
  update(){
    /* let selectedrowindex: number[] = this.gridView.getSelectedRowIndexes();  // get the selected row indexes.
    let selectedIndex = selectedrowindex[0]    
    let selectedrecords: Element[] = this.gridView.getSelectedRows();
    let selectedrecord = selectedrecords[0];
    let selectedData = this.gridView.getRowByIndex(0);
    let data = this.gridView.getRowObjectFromUID("grid-row 11"); */
    let data = this.selectedRow;
    alert(JSON.stringify(data))
    alert(data["groupId"])
    this.apiService.updatePart(data["groupId"],data["code"],data["name"],data["brand"],data["version"],data["purchase"],data["price"],data["numberOf"],data["sales"]);

     // get the selected records.  
   }
  
  save(args: Event): void  {
  console.log(args.target)
  try{
  let rowObj: IRow<Column> = this.gridView.getRowObjectFromUID(closest(<Element>args.target, '.e-row').getAttribute('data-uid'));
  let data: Object = rowObj.data;
  this.selectedRow = data  
  }catch(err){
    
  }
  

    //this.apiService.updatePart(data["group"],data["code"],data["name"],data["brand"],data["version"],data["purchase"],data["price"],data["number_of"],data["sales"]);
}
 chooseData(){
  let group = <HTMLSelectElement>document.getElementById("group");
  let sel = group.selectedIndex;
  let selOpt = group.options[sel];
  let selGroup = selOpt.value;
  switch(selGroup) {
    case "externals":
      this.partData = this.externals
      break;
    case "internals":
      this.partData = this.internals
      break;
    case "electrics":
      this.partData = this.electrics
      break;
    case "generals":
      this.partData = this.generals
      break;
    default: this.partData = this.externals
      //break;

       
  }
}
}

