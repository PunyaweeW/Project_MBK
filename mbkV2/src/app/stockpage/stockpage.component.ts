import { Component, OnInit, ViewChild } from '@angular/core';
import { MbkApiService } from '../mbk-api.service';
import { closest } from '@syncfusion/ej2-base';
//import { jsPDF, jspdf } from "jspdf"
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.fonts = {
  THSarabunNew: {
    normal: 'THSarabunNew.ttf',
    bold: 'THSarabunNew-Bold.ttf',
    italics: 'THSarabunNew-Italic.ttf',
    bolditalics: 'THSarabunNew-BoldItalic.ttf'
  },
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf'
  }
}
import { PageSettingsModel, RowSelectEventArgs, click, Grid } from '@syncfusion/ej2-grids';
import { CommandModel, Column, SearchSettingsModel, IEditCell, GridComponent, IRow, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
declare var JsBarcode: any;
//const jsPDF = require('jspdf')


@Component({
  selector: 'app-stockpage',
  templateUrl: './stockpage.component.html',
  styleUrls: ['./stockpage.component.scss']
})

export class StockpageComponent implements OnInit {
  docDefinition = {
    content: [
      { text: 'This is a header', style: 'header' },
      'No styling here, this is a standard paragraph',
      { text: 'Another text', style: 'anotherStyle' },
      { text: 'Multiple styles applied', style: ['header', 'anotherStyle'] }
    ],

    styles: {
      header: {
        fontSize: 22,
        bold: true
      },
      anotherStyle: {
        italics: true,
        alignment: 'right'
      }
    }
  };
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
  public pageSettings: Object;
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
    this.pageSettings = { pageSizes: true, pageSize: 10 };
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
    var groupMap = collectionData[2].innerHTML;
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
      "barcode": collectionData[1].innerHTML,
      "name": collectionData[3].innerHTML,
      "brand": collectionData[4].innerHTML,
      "version": collectionData[5].innerHTML,
      "purchase": collectionData[6].innerHTML,
      "price": collectionData[7].innerHTML,
      "numberOf": collectionData[8].innerHTML,
      "sales": collectionData[9].innerHTML,
      "threshold": collectionData[10].innerHTML
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
  print() {

    console.log(this.gridView.getSelectedRows())
    var selectedRows = <any>this.gridView.getSelectedRows();
    console.log(selectedRows);
    for (var i = 0; i < selectedRows.length; i++) {
      let selectedRow = selectedRows[i].children;
      console.log(selectedRow[1].innerHTML);
      console.log(JsBarcode("#barcode", selectedRow[1].innerHTML));
      // let barcodePdf = new jsPDF('l', 'mm', 'a4');
      // barcodePdf.text(selectedRow[1].innerHTML);
      // barcodePdf.save('Test.pdf');
    }
  }
  download() {
    const documentDefinition = {

      pageSize: {
        width: 500,
        height: 'auto'
      }, content: [
        {
          style: 'tableExample',
          table: { body: [] }

        },
      ], defaultStyle: { font: "THSarabunNew" }
    };

    var selectedRows = <any>this.gridView.getSelectedRows(); //selected rows
    var verticalcontent: any = [];
    //var doc = new jsPDF();//PDF document 
    var contents: any = [];
    var contentsImage: any = [];
    var currentRow = -1;
    //check if number of selected rows in multiple of 3
    if (selectedRows.length % 3 != 0) {
      for (var i = 0; i < selectedRows.length; i++) {
        var canvas = document.createElement('canvas');
        canvas.id = "barcode" + i;
        console.log(canvas)
        var ctx = canvas.getContext("2d");

        let selectedRow = selectedRows[i].children;
        JsBarcode(canvas, selectedRow[1].innerHTML);
        let img = canvas.toDataURL('image/png');
        let textObj = { text: selectedRow[3].innerHTML + " " + selectedRow[4].innerHTML + " " + selectedRow[5].innerHTML, alignment: 'center', fontSize: 25 };
        let imgObj = { image: img, width: 100, height: 75, alignment: 'left' };
        verticalcontent.push(textObj);
        verticalcontent.push(imgObj);
        documentDefinition.content = verticalcontent;


      }
      console.log(documentDefinition.content);
      pdfMake.createPdf(documentDefinition).open();
    } else {
      for (var i = 0; i < selectedRows.length; i++) {
        var canvas = document.createElement('canvas');
        canvas.id = "barcode" + i;
        console.log(canvas)
        var ctx = canvas.getContext("2d");

        let selectedRow = selectedRows[i].children;
        JsBarcode(canvas, selectedRow[1].innerHTML);
        let img = canvas.toDataURL('image/png');
        let textObj = { text: selectedRow[3].innerHTML + " " + selectedRow[4].innerHTML + " " + selectedRow[5].innerHTML, alignment: 'center', fontSize: 25 };
        let imgObj = { image: img, width: 100, height: 75, alignment: 'left' };
        if ((i % 3 == 0)) {
          currentRow = currentRow + 1;
          console.log(currentRow);
          let rowObj: any = [];
          let rowObjImg: any = [];//store image of barcode
          rowObj.push(textObj);
          rowObjImg.push(imgObj);
          contents.push(rowObj);
          contentsImage.push(rowObjImg);
        } else {
          contents[currentRow].push(textObj);
          contentsImage[currentRow].push(imgObj);
        }

      }

      console.log(contents);
      var contentTable: any = new Array();

      for (var i = 0; i < contents.length; i++) {
        contentTable.push(contents[i]);
        contentTable.push(contentsImage[i]);
      }
      console.log(contentTable);

      documentDefinition.content[0].table.body = contentTable;
      console.log(documentDefinition);

      pdfMake.createPdf(documentDefinition).open();

      //doc.addPage(); //to add new page to PDF


      // Save the PDF
      // doc.save('Test.pdf');
    }
  }
}

