import { Component, OnInit } from '@angular/core';
import { MbkApiService } from '../mbk-api.service';
import { DataserviceService } from "../../app/dataservice.service"
//import { PdfmakeService } from 'ng-pdf-make/pdfmake/pdfmake.service';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { DateAdapter } from '@angular/material';

import { contentReady } from '@syncfusion/ej2-angular-grids';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { element } from 'protractor';
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
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
  notifications = [
    { "groupId": "01", "barcode": "000000", "name": "A", "brand": "B", "version": "V", "numberOf": 3, "status": "300", "order": 0, "price": 45, "purchase": 35, "threshold": 5, "sales": 2 },
    { "groupId": "01", "barcode": "000001", "name": "AA", "brand": "B", "version": "V", "numberOf": 3, "status": "300", "order": 0, "price": 45, "purchase": 35, "threshold": 5, "sales": 2 }
  ];
  partToBeSold: any = [];
  interestedPart: any;
  constructor(private mbkApiService: MbkApiService, private dataService: DataserviceService) { }
  ngOnInit() {
    //initialize pdfmakeservice


  }
  //saling section+++++++++++++++++++++++++++++++++++++
  onSubmit(form) {

    var submittedForm = form;
    var regExp = new RegExp(/[0-9]|\./);
    var validNumber = (regExp.test(submittedForm.value.number));
    if (!validNumber) {
      alert('กรุณาระบุค่าที่เป็นตัวเลข');
    } else {
      var soldValue = Number(submittedForm.value.number);
      if (soldValue <= 0) {
        alert('กรุณาระบุค่าที่มากกว่า 0');
      }
      else {
        console.log(submittedForm.value)
        console.log(this.interestedPart)
        var oldValue = Number(this.interestedPart.numberOf);
        var remains = oldValue - soldValue;
        var threshold = Number(this.interestedPart.threshold);
        console.log("old: " + oldValue);
        console.log("remains: " + remains);
        console.log("threshold: " + remains);
        if (remains < threshold) {
          console.log('ใกล้หมด');
          let soldPartNoti = this.interestedPart;
          soldPartNoti.status = "300";
          soldPartNoti.sales = Number(soldPartNoti.sales) + Number(soldValue);
          soldPartNoti.numberOf = remains;
          soldPartNoti.soldValue = soldValue;
          console.log("sold");
          console.log(soldPartNoti);
          // this.mbkApiService.updatePart(soldPartNoti).subscribe((part: any) => {

          // });
          this.partToBeSold.push(soldPartNoti);

        } else {
          console.log("ok")
          let soldPartValid = this.interestedPart;
          soldPartValid.status = "100";
          soldPartValid.sales = Number(soldPartValid.sales) + Number(soldValue);
          soldPartValid.numberOf = remains;
          soldPartValid.soldValue = soldValue;

          console.log("sold");
          console.log(soldPartValid);
          //this.mbkApiService.updatePart(soldPartValid).subscribe((part: any) => { });
          this.partToBeSold.push(soldPartValid);

        }
      }

    }


  }
  checkBarcode() {
    var inputBarcode = <HTMLInputElement>document.getElementById('barcode');
    var result = <HTMLElement>document.getElementById('result');
    var newline = "\r\n";

    console.log("barcode is " + inputBarcode.value)
    this.mbkApiService.readByBarcode(inputBarcode.value).subscribe((part: any) => {
      console.log(part);
      if (typeof part[0] === 'undefined') {
        result.textContent = "ไม่พบ"
      } else if (typeof part[0] !== "undefined") {
        this.interestedPart = part[0];
        result.innerHTML = "ข้อมูลอะไหล่ <br />" + part[0]['name'] + "<br /> ยี่ห้อ " + part[0]['brand'] + ' รุ่น ' + part[0]['version'];
        result.innerHTML += "<br /> ราคาขาย " + part[0]['price'] + " บาท"
        result.innerHTML += "<br /> ยอดคงเหลือ " + part[0]['numberOf'] + " หน่วย"

      }

    });
  }
  //end of saling section------------------------------
  //sales report genarator+++++++++++++++++++++++++++++
  generateSalesReport(startDate, endDate) {
    var contents = "";
    var startDateRev = startDate.split("/").reverse().join("/");
    var endDateRev = endDate.split("/").reverse().join("/");
    contents = "รายงานการขาย"
    contents += "ตั้งแต่วันที่ " + startDate + " ถึงวันที่ " + endDate;
    contents += "\n______________________________\n";
    // for (var i = 0; i < this.partToBeSold.length; i++) {
    //   contents += this.partToBeSold[i].name + this.partToBeSold[i].brand + this.partToBeSold[i].version + " ยอดขาย " + this.partToBeSold[i].sales + " หน่วย";
    //   contents += '\n';
    // }
    return contents;
  }
  //sales report generator-----------------------------
  //sales accept+++++++++++++++++++++++++++++++++++++++
  //this function is to sale all part in partToBeSold array
  saleAccept() {
    this.partToBeSold.forEach(element => {
      this.mbkApiService.updatePart(element).subscribe((part: any) => { });
      var newLog = {
        "groupId": element.group,
        "barcode": element.barcode,
        "actionId": "20"
      }
      console.log(newLog)
      this.mbkApiService.createLog(newLog).subscribe((log: any) => { });
    });




    this.prinReceipt();
  }
  //sales accept---------------------------------------
  //sales receipt genarator+++++++++++++++++++++++++++++
  generateReceipt() {
    var contents = [];
    var content = "";
    var headers = "";
    var sum = 0;
    var priceSum = 0;
    //
    var dd = "";
    var mm = "";
    var today = new Date();

    var yyyy = today.getFullYear();
    if (today.getDate() < 10) {
      dd = '0' + (today.getDate()).toString();
    } else {
      dd = (today.getDate()).toString();
    }

    if (today.getMonth() + 1 < 10) {
      mm = '0' + (today.getMonth() + 1).toString();
    } else {
      mm = (today.getMonth()).toString();

    }

    var date = dd + '/' + mm + '/' + yyyy;
    //


    headers = "ใบกำกับภาษีอย่างย่อ\n";
    headers += date + "\n";
    headers += "\n------------------------------------------\n";
    headers += "รายการอะไหล่\n";
    content += "\n";
    for (var i = 0; i < this.partToBeSold.length; i++) {
      content += this.partToBeSold[i].name + " " + this.partToBeSold[i].brand + " " + this.partToBeSold[i].version + " " + "ราคา " + this.partToBeSold[i].price + " บาท " + "\nยอดจำหน่าย " + this.partToBeSold[i].sales + " หน่วย";
      sum += this.partToBeSold[i].sales;
      priceSum += (this.partToBeSold[i].sales * this.partToBeSold[i].price);
      content += '\n';
    }
    content += "\n------------------------------------------\n";

    content += "ยอดสุทธิ " + sum;
    content += "\n ยอดชำระ " + priceSum + " บาท";

    contents.push({ text: headers, bold: true }, { text: content })
    return contents;
  }


  //sales receipt generator-----------------------------
  prinReceipt() {

    const documentDefinition = {
      pageSize: {
        width: 200,
        height: 'auto'
      }, content: this.generateReceipt(), defaultStyle: { font: "THSarabunNew" }
    };
    pdfMake.createPdf(documentDefinition).open();
  }

  //printing report++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  printReport() {
    var startDate = <HTMLInputElement>document.getElementById("startDate");
    var endDate = <HTMLInputElement>document.getElementById("endDate");
    console.log(startDate.value, endDate.value);
    const documentDefinition = {
      pageSize: {
        width: 200,
        height: 'auto'
      }, content: this.generateSalesReport(startDate.value, endDate.value), defaultStyle: { font: "THSarabunNew" }
    };
    pdfMake.createPdf(documentDefinition).open();
  }
  //printing report---------------------------------------------------------
}
