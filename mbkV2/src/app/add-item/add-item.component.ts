import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {} from "../../environments/environment"
import { AngularFireDatabase, AngularFireDatabaseModule ,AngularFireList} from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import {environment} from "../../environments/environment";
import { Observable } from  'rxjs';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  //submitted info//
  //handle submit part info
  name:any;
  brand:any;
  version:any;
  specs: any;
  purchase:any;
  price:any;
  numberOf:any;
  barcode:any;
  ////////////////////////  
  //
nameList : any [] = [];
brandList : any["-"];
versionList : any ["-"];
specificList : any ["-"];
selectPartIndex : any;
brandIndex :any;
List : any [];
partList : AngularFireList<any>;
partContent: Observable<any[]>;
//form data control//
public accept = false;
notCustomSpecs = false;
customSpecs = true;
notCustomVersion = false;
customVersion = true;
notCustomBrand = false;
customBrand = true;//for check if user want to input other brand
notCustomName = false;
customName = true; 
groupDict = [{code:"01",name:"อะไหล่ภายใน"},{code:"02",name:"ระบบไฟฟ้า"},{code:"02",name:"อะไหล่ภายนอก"},{code:"04",name:"อะไหล่ทั่วไป"}];
//  public brandList = [{brand:"VEERRUBBER"},{brand:"CHEETAH"}];

//constructor
constructor(private db: AngularFireDatabase) { 
  AngularFireModule.initializeApp(environment.firebaseConfig,'MBKPRJV1'),
  AngularFireDatabaseModule
  this.partList = db.list('sparepart/');
  this.partContent = this.partList.valueChanges();
  this.partContent.subscribe(
    (res: any) => {console.log(res);
      this.nameList = res;
       
      console.log(this.nameList)
    } 
  );
}
  ngOnInit(){
  }
//update form
updateDropdown(){
   var nameDropdown = <HTMLSelectElement>document.getElementById("normalName");
   let selectIndex = nameDropdown.selectedIndex;
   let selectOption = nameDropdown.options[selectIndex];
   let currentName = selectOption.text;
   this.nameList.find( part => {if(currentName == part.name){ this.brandList = part.brands,this.versionList = part.versions; this.specificList = part.specifics}})
}
//test add info
test(){
  this.db.object('/formInfo/sparepart/0/brands/').update({3:"s"});
}
//on submit event of the form
onSubmit(form){
  var formResult = <HTMLElement>document.getElementById("formResult");
  console.log(form.value);
  let submittedForm = form.value;
  let groupName = this.groupDict.find( x => {if(x.code == submittedForm.group){return x} });

  //handling name++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  if(!this.notCustomName){
    //ordinary name 
    this.name = submittedForm.normalName;
  }else if(!this.customName){
    //for new name doesn't exist in database
    this.name = submittedForm.customName;
       
   //add name   
   var path = 'sparepart/'+this.nameList.length;
   console.log(path);
   this.db.object(path).update({ name : this.name});
   //add brand
   path = 'sparepart/'+this.nameList.length+'/'+'brands/';
   console.log(path);
   this.db.object(path).update({ 0 : submittedForm.customBrand});
   //add version
   path = 'sparepart/'+this.nameList.length+'/'+'versions/';
   console.log(path);
   this.db.object(path).update({ 0 : submittedForm.customVersion});
   //add specification
   path = 'sparepart/'+this.nameList.length+'/'+'specifics/';
   console.log(path);
   this.db.object(path).update({ 0 : submittedForm.customSpecs}); 
  
  }
  //end of handling name-----------------------------------------------------------


  //handling brand data++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  if(!this.notCustomBrand){
    //normal brands
    this.brand = submittedForm.normalBrand;
  }else if(!this.customBrand){
    //custom brands
    this.brand = submittedForm.customBrand;
    var  partBrand = "";
    for(var i =0;i< this.nameList.length;i++){
      if(this.nameList[i].name == this.name){
       
         var brandInd = this.brandList.length;
         var newbrand = { [brandInd] : this.brand};
         console.log(newbrand)
         var path = 'sparepart/'+i+'/'+'brands/';
         console.log(path);
         this.db.object(path).update(newbrand);
      }
    }
    
  }
  //end of handling brand-----------------------------------------
  //handling version++++++++++++++++++++++++++++++++++++++++++++++
  if(!this.notCustomVersion){
    //normal versions
    this.version = submittedForm.normalVersion;
  }else if(!this.customVersion){
    //custom versions
    this.version = submittedForm.customVersion;
    for(var i =0;i< this.nameList.length;i++){
      if(this.nameList[i].name == this.name){
       
         var versionInd = this.versionList.length;
         var newversion = { [versionInd] : this.version};
         console.log(newversion)
         var path = 'sparepart/'+i+'/'+'brands/';
         console.log(path);
         this.db.object(path).update(newversion);
      }
    }
    
  }

  //end of handling version--------------------------------------
  //handling specs+++++++++++++++++++++++++++++++++++++++++++++++
  if(!this.notCustomSpecs){
    //normal specs
    this.specs = submittedForm.normalSpecs;
  }else if(!this.customSpecs){
    //custom brands
    this.specs = submittedForm.customSpecs;
    var  partBrand = "";
    for(var i =0;i< this.nameList.length;i++){
      if(this.nameList[i].name == this.name){
       
         var specsInd = this.specificList.length;
         var newspecs = { [specsInd] : this.specs};
         console.log(newspecs)
         var path = 'sparepart/'+i+'/'+'specifics/';
         console.log(path);
         this.db.object(path).update(newspecs);
      }
    }
    
  }

  //end of handling specs---------------------------------------
  formResult.innerHTML = ("ต้องการเพิ่มอะไหล่ใหม่ในหมวด" + groupName.name + " คือ " + this.name + " ยี่ห้อ " + this.brand + "รุ่น " + 
  this.version + " " + this.specs + " มีราคาซื้อ " + submittedForm.purchase + " บาท " + "ราคาขาย " + submittedForm.price + " บาท " + " เป็นจำนวน " + submittedForm.numberOf + "หน่วย")
  
  //accept ?
this.accept = !(this.accept); 
}
//accep handling section+++++++++++++++++++++
acceptForm(){
  alert("new part")
  location.reload();
}
//accept handling section-------------------

 //form control section+++++++++++++++++++++++++++++++++++++++++++++++++++++++

//following methods are for managing form input//
 //update checking custom name 
 setCustomName(){
  this.notCustomName = true;
  this.customName = false;
 }
setNormalName(){
  this.notCustomName = false;
  this.customName = true;
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
//end of form control section----------------------------------------------
}
