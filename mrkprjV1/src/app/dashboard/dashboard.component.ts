import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Part } from '../parts';
import {logs} from '../logObj';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  parts : Part [];
  sales : any[];
  constructor(private apiService: ApiService) { }
  typeExternalsChart: any;
  externalsChart: any;
  internalsChart: any;
  electricsChart: any;
  generalsChart: any;
  optionsExternalsChart: any;
  externals = [];
  internals = [];
  electrics = [];
  generals = [];
  logging = [];
  todayLogging = [];
  date: String = " "; 
  private interestedPart:any;
  ngOnInit() {
 /*    this.apiService.readLog().subscribe((logging: logs[])=>{
      this.logging = logging;
      
 
      console.log(this.logging[0]);
      var i = 0;
       for(i;i<this.logging.length;i++){
             
      this.date =this.logging[i].timestamp;
      /* var temp = this.date.substring(0,10);
      var dateComp = []
      dateComp = temp.split('-');
      var today = new Date();
      let year = Number(dateComp[0]) - Number(today.getFullYear());
      let mount = Number(dateComp[0]) - Number((today.getMonth()+1));
      let day = Number(dateComp[0]) - Number(today.getDate());
      if(year == 0 && mount ==0 &&day ==0 ){
       this.todayLogging.push(this.logging[i]);
      } 
      }
    });
   */
    this.apiService.readParts().subscribe((sales : any[])=>{
      this.sales = sales;
      console.log(this.sales)
      var i = 0;
      for(i;i<this.sales.length;i++){
        for(var j = 0; j < this.sales[i].length;j++){
          if(this.sales[i][j].groupId == "03"){
            this.externals.push(this.sales[i]);
          }
          if(this.sales[i][j].groupId == "01"){
            this.internals.push(this.sales[i]);
          }
          if(this.sales[i][j].groupId == "02"){
            this.electrics.push(this.sales[i]);
          }
          if(this.sales[i][j].groupId == "04"){
            this.generals.push(this.sales[i]);
          }
        }
        
        
      }
      console.log(sales[0][0]);
      

 
  this.typeExternalsChart = 'bar';    
  this.externalsChart = {
    labels: [this.externals[0].name+this.externals[0].brand+this.externals[0].version,this.externals[1].name+this.externals[1].brand+this.externals[1].version,this.externals[2].name+this.externals[2].brand+this.externals[2].version,this.externals[3].name+this.externals[3].brand+this.externals[3].version
  ,this.externals[4].name+this.externals[4].brand+this.externals[4].version],
    datasets: [
      {
        label: "อะไหล่ภายนอก",
        data: [this.externals[0].sales,this.externals[1].sales, this.externals[2].sales, this.externals[3].sales, this.externals[4].sales],
        backgroundColor : ['#1abc9c', '#3498db', '#9b59b6', '#bdc3c7', '#f39c12']
      }
    ]
  };
  this.internalsChart = {
    labels: [this.internals[0].name+this.internals[0].brand+this.internals[0].version,this.internals[1].name+this.internals[1].brand+this.internals[1].version,this.internals[2].name+this.internals[2].brand+this.internals[2].version,this.internals[2].name+this.internals[3].brand+this.internals[3].version
    ,this.internals[4].name+this.internals[4].brand+this.internals[4].version],
    datasets: [
      {
        label: "อะไหล่ภายใน",
        data: [this.internals[0].sales,this.internals[1].sales, this.internals[2].sales, this.internals[3].sales, this.internals[4].sales],
        backgroundColor : ['#1abc9c', '#3498db', '#9b59b6', '#bdc3c7', '#f39c12']
      }
    ]
  };
 this.electricsChart = {
    labels: [this.electrics[0].name+this.electrics[0].brand+this.electrics[0].version,this.electrics[1].name+this.electrics[1].brand+this.electrics[1].version,this.electrics[2].name+this.electrics[2].brand+this.electrics[2].version,this.electrics[2].name+this.electrics[3].brand+this.electrics[3].version
    ,this.electrics[4].name+this.electrics[4].brand+this.electrics[4].version],
    datasets: [
      {
        label: "ระบบไฟฟ้า",
        data: [this.electrics[0].sales,this.electrics[1].sales, this.electrics[2].sales, this.electrics[3].sales, this.electrics[4].sales],
        backgroundColor : ['#1abc9c', '#3498db', '#9b59b6', '#bdc3c7', '#f39c12']
      }
    ]
  };
  this.generalsChart = {
    labels: [this.generals[0].name+this.generals[0].brand+this.generals[0].version,this.generals[1].name+this.generals[1].brand+this.generals[1].version,this.generals[2].name+this.generals[2].brand+this.generals[2].version,this.generals[3].name+this.generals[3].brand+this.generals[3].version
    ,this.generals[4].name+this.generals[4].brand+this.generals[4].version],
    datasets: [
      {
        label: "อุปกรณ์ทั่วไป",
        data: [this.generals[0].sales,this.generals[1].sales, this.generals[2].sales, this.generals[3].sales, this.generals[4].sales],
        backgroundColor : ['#1abc9c', '#3498db', '#9b59b6', '#bdc3c7', '#f39c12']
      }
    ]
  }; 
  this.optionsExternalsChart = {
    responsive: true,
    maintainAspectRatio: false,
    pieceLabel: {
      render: 'value',  
      fontSize: 20,
      fontStyle: 'bold',
      fontColor: '#FFF',
      fontFamily: '"db_heaventmed_cond"'
    },
  };
})

}

search(toSearchCode){
 var group = toSearchCode.substring(0,2);
 var searchList:any;
 if(group == "01"){
      searchList = this.sales[0];
 }else if(group == "02"){
  searchList = this.sales[1];

 }else if(group == "03"){
  searchList = this.sales[2];

 }
 else if(group == "04"){
  searchList = this.sales[3];

 }
 
    for(var j = 0; j < searchList.length;j++){
       if(searchList[j]['code'] == toSearchCode ){
        this.interestedPart = searchList[j];
         return 1;
       }
    
    
  }

}


checkCode(){
var inputCode = <HTMLInputElement>document.getElementById('part_code');
var partInfo = <HTMLElement>document.getElementById('partInfo');

var partCode = inputCode.value;
var found = 0;
var newline = "<br />";


//console.log(this.sales)
 
   if(this.search(partCode)){
    
      partInfo.innerHTML = this.interestedPart['name'] +"<br /> ยี่ห้อ" + this.interestedPart['brand'] + ' รุ่น' + this.interestedPart['version'];
      partInfo.innerHTML += "<br /> ราคาขาย " + this.interestedPart['price'] + " บาท"
      partInfo.innerHTML += "<br /> ยอดคงเหลือ " + this.interestedPart['amount'] + " ชื้น"
      
      found = 1;

   } 



    if(found != 1){
      partInfo.textContent = "ไม่พบ";

    }
}

  salePart(){
    var groupId;
    var amount = <HTMLInputElement>document.getElementById('amount');
    var updateVal;
    groupId = this.interestedPart['code'].substr(0,2)
    //var sel = group.selectedIndex;
    ///var selOpt = group.options[sel];
     
           updateVal = Number( this.interestedPart['numberOf']) - Number(amount.value);
          // this.sales[i]['amount']=updateVal;
          /// console.log(amount.value);
         //  console.log(updateVal);
 
    this.apiService.updateAmount(groupId,this.interestedPart['code'],updateVal);
  }
  updateAmount(){
    //var group = <HTMLSelectElement>document.getElementById('pgroup'); 
    var groupId;
    var amount = <HTMLInputElement>document.getElementById('amount');
    var updateVal;
    groupId = this.interestedPart['code'].substr(0,2)
    //var sel = group.selectedIndex;
    ///var selOpt = group.options[sel];
     
           updateVal = Number( this.interestedPart['numberOf']) + Number(amount.value);
          // this.sales[i]['amount']=updateVal;
          /// console.log(amount.value);
         //  console.log(updateVal);
 
    this.apiService.updateAmount(groupId,this.interestedPart['code'],updateVal);
  
  }


  
}