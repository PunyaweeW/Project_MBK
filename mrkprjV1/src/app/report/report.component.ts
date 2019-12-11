import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  amounts : any[];
  tops : any[];
  public notifications : any[];
  typeChart: any;
  externalsChart: any;
  internalsChart: any;
  electricsChart: any;
  generalsChart: any;
  optionsChart: any;
  public externals : any[] = ["externals"];
  public internals : any[] =[];
  public electrics : any[] =[];
  public generals : any[] =[];
 constructor(private apiService: ApiService) { }
 
 
  ngOnInit() {
    this.apiService.readSales().subscribe((amounts : any[])=>{
      this.amounts = amounts;
      this.externals = amounts;
   
       
      console.log("amount",this.amounts);
      
    })
    
    console.log("ext",this.externals);
 
    this.typeChart = 'pie';    
    this.externalsChart = {
      labels: ["ยางนอก YAMAHA FINO", "โซ่ดำพระอาทิตย์ 428-100", "ผ้าดิสเบรคหน้า AMTEX WAVE 125","ยางนอก CHEETEAH 70/90-14","แบตเตอรี่แห้ง LEO YTZ 5"],
      datasets: [
        {
          label: "My Stats Chart",
          data: [10, 30, 50, 30, 40],
          backgroundColor : ['#1abc9c', '#3498db', '#9b59b6', '#bdc3c7', '#f39c12']
        }
      ]
    };
    this.optionsChart = {
      responsive: true,
      maintainAspectRatio: false,
      pieceLabel: {
        render: 'value',  // สามารถเปลี่ยนการตั้งค่าตามต้องการได้ 'value','label','percentage'
        fontSize: 10,
        fontStyle: 'bold',
        fontColor: '#FFF',
        fontFamily: '"db_heaventmed_cond"'
      },
    };
  }

   
}

