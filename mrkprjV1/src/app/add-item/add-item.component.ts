import { Component, OnInit, Version } from '@angular/core';
import {SideNavComponent} from "../side-nav/side-nav.component";
import { ApiService } from '../api.service';
import { Part } from '../parts';
import { generate } from 'rxjs';
import { FormGroup, FormsModule,FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import {Md5} from 'ts-md5/dist/md5';
import { NgxBarcodeModule } from 'ngx-barcode';
import { version } from 'punycode';
import { versionList,specificList } from '../../assets/versionList.json';  //import version list json
import {nameList} from '../../assets/nameList.json';// import name list json
import {brandList} from '../../assets/brandList.json';// import brand list  json
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit  {
  public newPart:  Part  = { gid :  null , code:null, pname:  null,brand: null,vers: null, purchase:null};
  public parts:  Part[];
  constructor(private apiService: ApiService) { }
  partRegisterForm: FormGroup;
  private brandList:any= brandList;
  private versionList :any;
  private specificList:any ;
  private nameList =  nameList;
  /////////////////////////////
  private notCustomSpecs = false;
  private customSpecs = true;
  private notCustomVersion = false;
  private customVersion = true;
  private notCustomBrand = false;
  private customBrand = true;//for check if user want to input other brand
  //////////////////////////////
  private partToAdd : any;
  private  group : any; 
  private  name : any;  
  private  brand : any;  
  private  version : any;  
  private   specific : any;
  private purchase: any;
  private price: any;
  private numberOf;  


  //initialization of the page
  ngOnInit() {
   }
  //submited the form 
  onSubmit(form: NgForm) {
    console.log(form.value)
    var hashCode : any;
    var hashBarcode :any;
    this.partToAdd = form.value;
    this.group = this.partToAdd["group"];
    this.name = this.partToAdd["name"];
    this.purchase = this.partToAdd["purchase"];
    this.price = this.partToAdd["price"];
    this.numberOf = this.partToAdd["numberOf"];
    //check brand
    if(this.partToAdd["normalBrand"] == null){
      this.brand = this.partToAdd["customBrand"]
    }
    else if(this.partToAdd["customBrand"] == null){
       this.brand = this.partToAdd["normalBrand"]
    }
    //check version
    if(this.partToAdd["normalVersion"] == null){
      this.version = this.partToAdd["customVersion"]
    }
    else if(this.partToAdd["customBrand"] == null){
       this.version = this.partToAdd["normalVersion"]
    } 
    //check specification
    if(this.partToAdd["normalSpecs"] == null){
      this.specific = this.partToAdd["customSpecs"]
    }
    else if(this.partToAdd["customSpecs"] == null){
       this.specific = this.partToAdd["normalSpecs"]
    }
    
    //save registered information to temp variable
    var barcode = this.partToAdd["barcode"];
    var purchase = this.partToAdd["purchase"];
    var price = this.partToAdd["price"];
    var numberOf = this.partToAdd["numberOf"];
    var refCode = "";
    
    refCode = this.refCodeGenerator();
    if(barcode == ""){
      barcode = this.barcodeGenarator(refCode);
    }else{
      barcode = barcode;
    }
   hashCode = Md5.hashStr(refCode);
   hashBarcode = Md5.hashStr(barcode);
   console.log(refCode.charCodeAt(0))
   console.log(hashCode)
   console.log(hashBarcode)
   //checking is   part to be added is exist ?
   let checkingRes:any = this.apiService.readAPart(this.group,refCode);
   if(checkingRes.length == 0 ){
    //add new part 
    //first add to suitable table 
    this.apiService.createPart(this.group,refCode,this.name,this.brand,(this.version + this.specific),this.purchase,this.price,this.numberOf) 
    //second add log info

    //some code will be added soon

    //third add barcode with its hash and ref. code with its hash to hash database table 
  
    //some code will be added soon 
  }
   else if (checkingRes.length != 0 ){
     console.log(checkingRes)
     alert("อะไหล่ชิ้นนี้อยู่ในคลังเรียบร้อยแล้ว")
   }

  }
  //update checking custom brand variable
  setCustomBrand(){
    this.notCustomBrand = true;
    this.customBrand = false;
   }
  setNormalBrand(){
    this.notCustomBrand = false;
    this.customBrand = true;

   }
//update checking custom version
setCustomVersion(){
  this.notCustomVersion = true;
  this.customVersion = false;
 }
setNormalVersion(){
  this.notCustomVersion = false;
  this.customVersion = true;


 }
 //update checking custon specification
 setCustomSpecs(){
  this.notCustomSpecs = true;
  this.customSpecs = false;
 }
setNormalSpecs(){
  this.notCustomSpecs = false;
  this.customSpecs = true;


 }
   //generate barcode if the input is empty 
  barcodeGenarator(code){
    var code =code;
    for(var i =0 ; i < code.length;i++){
      let str = code[i];
      code[i] = str.charCodeAt(0)
    }
  } 
   ////
  //adding new part to stock 
 
  addItem() {    
 
  }
  // generate reference code
  refCodeGenerator(){
    var code = "";
    var groupRef = "";//length = 2
    var nameRef = ""; //length = 3
    var brandRef = ""; //length =3
    var versionRef = ""; //length =3
    var specificRef = ""; // length = 3
    //total length of referene code = 15 characters
    //map group with ref. code
    //->automatically map from registeration 
    groupRef = this.group;

    //map name 
    nameRef = this.name;
    let nameObj:any = this.nameList.find( x => x.name === nameRef);
    nameRef = nameObj.code;
    console.log(nameObj)
    //map brand
    brandRef = this.brand;
    //version map
    versionRef = this.version;
    //specific map
    specificRef = this.specific;
    code =  groupRef  + nameRef + brandRef + versionRef + specificRef
    return code;
  }

  updateDropdown(){
    var inName = <HTMLInputElement>document.getElementById("name");
    var input = inName.value;
    var nameList = ["ยาง","ล้อ","่โซ่","ซี่","ผ้าเบรค","เบรค"]
    var generalList = ["กรอบ","ป้าย","หมวก","พรบ" ]
   for(var i = 0 ; i< nameList.length ;i++){
      if(input.startsWith(nameList[i])) {
        this.specificList = specificList["wheel"];
        this.versionList = versionList["bike"];
     }
    }
    for(var i = 0 ; i< generalList.length ;i++){
      if(input.startsWith(generalList[i])) {
        this.specificList = specificList["generic"];
        this.versionList = versionList["generals"];
     }
    } 
     
}
}
