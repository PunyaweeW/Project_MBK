/* import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { } from "../../environments/environment"
import { AngularFireDatabase, AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
import { MbkApiService } from "../mbk-api.service"
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  //form group
  reactiveForm = new FormGroup({
    barcode: new FormControl(),
    group: new FormControl(),
    normalName: new FormControl(),
    customName: new FormControl(),
    normalBrand: new FormControl(),
    customBrand: new FormControl(),
    normalVersion: new FormControl(),
    customVersion: new FormControl(),

    normalSpecs: new FormControl(),
    customSpecs: new FormControl(),

    purchase: new FormControl(),
    price: new FormControl(),
    numberOf: new FormControl(),
    threshold: new FormControl()

  })
  //submitted info//
  //handle submit part info
  name: any;
  brand: any;
  version: any;
  specs: any;
  purchase: any;
  price: any;
  numberOf: any;
  barcode: any;
  threshold: any;
  newPart: any;
  ////////////////////////  
  //
  nameList: any[] = [];
  brandList: any["-"];
  versionList: any["-"];
  specificList: any["-"];
  selectPartIndex: any;
  brandIndex: any;
  List: any[];
  partList: AngularFireList<any>;
  partContent: Observable<any[]>;
  //form data control//
  submittedForm: any;
  public accept = false;
  notCustomSpecs = false;
  customSpecs = false;
  notCustomVersion = false;
  customVersion = false;
  notCustomBrand = false;
  customBrand = false;//for check if user want to input other brand
  notCustomName = false;
  customName = false;
  groupDict = [{ code: "01", name: "อะไหล่ภายใน" }, { code: "02", name: "ระบบไฟฟ้า" }, { code: "03", name: "อะไหล่ภายนอก" }, { code: "04", name: "อะไหล่ทั่วไป" }];
  //  public brandList = [{brand:"VEERRUBBER"},{brand:"CHEETAH"}];


  //constructor
  constructor(private mbkApi: MbkApiService, private db: AngularFireDatabase) {
    AngularFireModule.initializeApp(environment.firebaseConfig, 'MBKPRJV1'),
      AngularFireDatabaseModule
    this.partList = db.list('sparepart/');
    this.partContent = this.partList.valueChanges();
    this.partContent.subscribe(
      (res: any) => {
        console.log(res);
        this.nameList = res;

        console.log(this.nameList)
      }
    );
  }


  ngOnInit() {
    this.reactiveForm.controls['customName'].disable();
    this.reactiveForm.controls['customBrand'].disable();
    this.reactiveForm.controls['customVersion'].disable();
    this.reactiveForm.controls['customSpecs'].disable();

  }

  //checking if  a part is already exist
  checkBarcode() {
    var barcodeInput = <HTMLInputElement>document.getElementById("barcode");
    var checkingBarcode = barcodeInput.value;
    this.mbkApi.readByBarcode(checkingBarcode).subscribe((part: any) => {
      console.log(part[0])
      if (typeof part[0] === 'undefined') {
        alert("อะไหล่ชิ้นนี้ยังไม่อยู่ในคลัง")
      } else if (typeof part[0] !== "undefined") {
        alert("อะไหล่ชิ้นนี้อยู่ในคลังแล้ว")
      }
    });


  }


  //update form choices
  updateDropdown() {
    var nameDropdown = <HTMLSelectElement>document.getElementById("normalName");
    let selectIndex = nameDropdown.selectedIndex;
    let selectOption = nameDropdown.options[selectIndex];
    let currentName = selectOption.text;
    this.nameList.find(part => { if (currentName == part.name) { this.brandList = part.brands, this.versionList = part.versions; this.specificList = part.specifics } })
  }

  //on submit event of the form
  onSubmit(form) {

    var reviewBox = <HTMLElement>document.getElementById("formResultWindow");
    var formResult = <HTMLElement>document.getElementById("formResult");
    console.log(form.value);
    this.submittedForm = form.value;

    if (!this.reactiveForm.controls['normalName'].disabled) {
      //ordinary name 
      this.name = this.submittedForm.normalName;
      this.notCustomName = true;
    } else if (!this.reactiveForm.controls['customName'].disabled) {
      //for new name doesn't exist in database
      this.name = this.submittedForm.customName;
      this.customName = true;
    }
    
    if (!this.reactiveForm.controls['normalBrand'].disabled) {
      //normal brands
      this.brand = this.submittedForm.normalBrand;
      this.notCustomBrand = true;
    } else if (!this.reactiveForm.controls['customBrand'].disabled) {
      //custom brands
      this.brand = this.submittedForm.customBrand;
      this.customBrand = true;
    }
    
    
    if (!this.reactiveForm.controls['normalVersion'].disabled) {
      //normal versions
      this.version = this.submittedForm.normalVersion;
      this.notCustomVersion = true;
    } else if (!this.reactiveForm.controls['customVersion'].disabled) {
      //custom versions
      this.version = this.submittedForm.customVersion;
      this.customVersion = true;
    }
    
    if (!this.reactiveForm.controls['normalSpecs'].disabled) {
      //normal specs
      this.specs = this.submittedForm.normalSpecs;
      this.notCustomSpecs;
    } else if (!this.reactiveForm.controls['customSpecs'].disabled) {
      //custom brands
       this.specs = this.submittedForm.customSpecs;
       this.customSpecs

    }
    
    
    let groupName = this.groupDict.find(x => { if (x.code == this.submittedForm.group) { return x } });
    this.barcode = this.submittedForm.barcode;
    //reviewing section+++++++++++++++++++++++++++++++++++++++++++++
    formResult.innerHTML = ("ต้องการเพิ่มอะไหล่ใหม่ในหมวด" + groupName.name + " คือ " + this.name + " ยี่ห้อ " + this.brand + " รุ่น " +
      this.version + " " + this.specs + " มีราคาซื้อ " + this.submittedForm.purchase + " บาท " + "ราคาขาย " + this.submittedForm.price + " บาท " + " เป็นจำนวน " + this.submittedForm.numberOf + " หน่วย" + " ดำหนดยอดขั้นต่ำ " + this.submittedForm.threshold + " รหัสสินค้า " + this.barcode);
    reviewBox.style.display = "block";
    //end of reviewing section-------------------------------------
  }
  //accep handling section+++++++++++++++++++++
  //user be sured to submit the add the part
  acceptRegist() {
    var reviewBox = <HTMLElement>document.getElementById("formResultWindow");
    reviewBox.style.display = "none";
    this.barcode = this.submittedForm.barcode;
    this.newPart = {
      "groupId": this.submittedForm.group,
      "barcode": this.barcode,
      "name": this.name,
      "brand": this.brand,
      "version": this.version + " " + this.specs,
      "purchase": this.submittedForm.purchase,
      "price": this.submittedForm.price,
      "numberOf": this.submittedForm.numberOf,
      "sales": 0,
      "threshold": this.submittedForm.threshold,
      "status": "100",
      "order": 0

    }
    console.log(this.newPart)
    this.mbkApi.createPart(this.newPart).subscribe((part: any)=>{});
    var newLog =  {
      "groupId": this.submittedForm.group,
      "barcode": this.barcode,
      "actionId": "30"
    }
    console.log(newLog)
    this.mbkApi.createLog(newLog).subscribe((log:any)=>{});
    //handling name++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    if (this.notCustomName) {
      //ordinary name 
      this.name = this.submittedForm.normalName;
    } else if (this.customName) {
      //for new name doesn't exist in database
      this.name = this.submittedForm.customName;

      //add name   
      var path = 'sparepart/' + this.nameList.length;
      console.log(path);
      this.db.object(path).update({ name: this.name });
      //add brand
      path = 'sparepart/' + this.nameList.length + '/' + 'brands/';
      console.log(path);
      this.db.object(path).update({ 0: this.submittedForm.customBrand });
      //add version
      path = 'sparepart/' + this.nameList.length + '/' + 'versions/';
      console.log(path);
      this.db.object(path).update({ 0: this.submittedForm.customVersion });
      //add specification
      path = 'sparepart/' + this.nameList.length + '/' + 'specifics/';
      console.log(path);
      this.db.object(path).update({ 0: this.submittedForm.customSpecs });

    }
    //end of handling name-----------------------------------------------------------


    //handling brand data++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    if (this.notCustomBrand) {
      //normal brands
      this.brand = this.submittedForm.normalBrand;
    } else if (this.customBrand) {
      //custom brands
      this.brand = this.submittedForm.customBrand;
      var partBrand = "";
      for (var i = 0; i < this.nameList.length; i++) {
        if (this.nameList[i].name == this.name) {

          var brandInd = this.brandList.length;
          var newbrand = { [brandInd]: this.brand };
          console.log(newbrand)
          var path = 'sparepart/' + i + '/' + 'brands/';
          console.log(path);
          this.db.object(path).update(newbrand);
        }
      }

    }
    //end of handling brand-----------------------------------------
    //handling version++++++++++++++++++++++++++++++++++++++++++++++
    if (this.notCustomVersion) {
      //normal versions
      this.version = this.submittedForm.normalVersion;
    } else if (this.customVersion) {
      //custom versions
      this.version = this.submittedForm.customVersion;
      for (var i = 0; i < this.nameList.length; i++) {
        if (this.nameList[i].name == this.name) {

          var versionInd = this.versionList.length;
          var newversion = { [versionInd]: this.version };
          console.log(newversion)
          var path = 'sparepart/' + i + '/' + 'versions/';
          console.log(path);
          this.db.object(path).update(newversion);
        }
      }

    }

    //end of handling version--------------------------------------
    //handling specs+++++++++++++++++++++++++++++++++++++++++++++++
    if (this.notCustomSpecs) {
      //normal specs
      this.specs = this.submittedForm.normalSpecs;
    } else if (this.customSpecs) {
      //custom brands
      this.specs = this.submittedForm.customSpecs;
      var partBrand = "";
      for (var i = 0; i < this.nameList.length; i++) {
        if (this.nameList[i].name == this.name) {

          var specsInd = this.specificList.length;
          var newspecs = { [specsInd]: this.specs };
          console.log(newspecs)
          var path = 'sparepart/' + i + '/' + 'specifics/';
          console.log(path);
          this.db.object(path).update(newspecs);
        }
      }


    }
    //assign threshold
    // this.threshold = this.submittedForm.threshold;
    //end of handling specs---------------------------------------
 

  }
  cancelRegist() {
    var reviewBox = <HTMLElement>document.getElementById("formResultWindow");
    reviewBox.style.display = "none";
  }
  //accept handling section-------------------

  //form control section+++++++++++++++++++++++++++++++++++++++++++++++++++++++
  genPrice() {
    var purchase = <HTMLInputElement>document.getElementById("purchase");
    var inPurchase = Number(purchase.value);
    var genPrice = (0.6 * inPurchase) + inPurchase;
    let price = { price: genPrice };
    this.reactiveForm.patchValue(price)
  }
  //following methods are for managing form input//
  //update checking custom name 
  setCustomName() {
    this.reactiveForm.controls['customName'].enable();
    this.reactiveForm.controls['normalName'].disable();

  }
  setNormalName() {
    this.reactiveForm.controls['normalName'].enable();
    this.reactiveForm.controls['customName'].disable();


  }
  //update checking custom brand variable
  setCustomBrand() {
    this.reactiveForm.controls['customBrand'].enable();
    this.reactiveForm.controls['normalBrand'].disable();

  }
  setNormalBrand() {
    this.reactiveForm.controls['normalBrand'].enable();
    this.reactiveForm.controls['customBrand'].disable();


  }
  //update checking custom version
  setCustomVersion() {
    this.reactiveForm.controls['customVersion'].enable();
    this.reactiveForm.controls['normalVersion'].disable();

  }
  setNormalVersion() {
    this.reactiveForm.controls['normalVersion'].enable();
    this.reactiveForm.controls['customVersion'].disable();


  }
  //update checking custon specification
  setCustomSpecs() {
    this.reactiveForm.controls['customSpecs'].enable();
    this.reactiveForm.controls['normalSpecs'].disable();

  }
  setNormalSpecs() {
    this.reactiveForm.controls['normalSpecs'].enable();
    this.reactiveForm.controls['customSpecs'].disable();


  }
  //end of form control section----------------------------------------------
}
 */

//updated version
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { } from "../../environments/environment"
import { AngularFireDatabase, AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
import { MbkApiService } from "../mbk-api.service"
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  //form group for part register form 
  reactiveForm = new FormGroup({
    barcode: new FormControl(),
    group: new FormControl(),
    name: new FormControl(),
    normalBrand: new FormControl(),
    customBrand: new FormControl(),
    normalVersion: new FormControl(),
    customVersion: new FormControl(),

    normalSpecs: new FormControl(),
    customSpecs: new FormControl(),

    purchase: new FormControl(),
    price: new FormControl(),
    numberOf: new FormControl(),
    threshold: new FormControl()

  })
  //submitted info//
  //handle submit part info
  name: any;
  brand: any;
  version: any;
  specs: any;
  purchase: any;
  price: any;
  numberOf: any;
  barcode: any;
  threshold: any;
  newPart: any;
  ////////////////////////  
  //variables for list of names brands version and specifications
  nameList: any[] = [];
  brandList: any["-"];
  versionList: any["-"];
  specificList: any["-"];
  targetName: any; //result of searchName module
  targetInd: any; //index of the result for adding new item to the list
  selectPartIndex: any;
  brandIndex: any;//target brand index for adding new item to list 
  List: any[];
  partList: AngularFireList<any>;
  partContent: Observable<any[]>;
  //form data control//
  submittedForm: any; //submiited form from user
  public accept = false;
  notCustomSpecs = false;
  customSpecs = false;//for check if user want to input other specsification
  notCustomVersion = false;
  customVersion = false;//for check if user want to input other brand
  notCustomBrand = false;
  customBrand = false;//for check if user want to input other brand
  //notCustomName = false;
  //customName = false;
  groupDict = [{ code: "01", name: "อะไหล่ภายใน" }, { code: "02", name: "ระบบไฟฟ้า" }, { code: "03", name: "อะไหล่ภายนอก" }, { code: "04", name: "อะไหล่ทั่วไป" }];
  //  public brandList = [{brand:"VEERRUBBER"},{brand:"CHEETAH"}];


  //constructor
  constructor(private mbkApi: MbkApiService, private db: AngularFireDatabase) {
    AngularFireModule.initializeApp(environment.firebaseConfig, 'MBKPRJV1'),
      AngularFireDatabaseModule
    this.partList = db.list('sparepart/');
    this.partContent = this.partList.valueChanges();
    this.partContent.subscribe(
      (res: any) => {
        console.log(res);
        this.nameList = res;
        //show name list for checking
        console.log(this.nameList)
      }
    );
  }


  ngOnInit() {
    this.reactiveForm.controls['customBrand'].disable();
    this.reactiveForm.controls['customVersion'].disable();
    this.reactiveForm.controls['customSpecs'].disable();

  }

  //checking if  a part is already exist
  checkBarcode() {
    var barcodeInput = <HTMLInputElement>document.getElementById("barcode");
    var checkingBarcode = barcodeInput.value;
    this.mbkApi.readByBarcode(checkingBarcode).subscribe((part: any) => {
      console.log(part[0])
      if (typeof part[0] === 'undefined') {
        alert("อะไหล่ชิ้นนี้ยังไม่อยู่ในคลัง")
      } else if (typeof part[0] !== "undefined") {
        alert("อะไหล่ชิ้นนี้อยู่ในคลังแล้ว")
      }
    });


  }


  //update form choices
  updateDropdown() {
    var name = <HTMLInputElement>document.getElementById("name");
    var currentInputName = name.value;
    var found = this.searchName(currentInputName);
    if (found) {
      this.nameList.find(part => { if (currentInputName == part.name) { this.brandList = part.brands, this.versionList = part.versions; this.specificList = part.specifics } })

    }
  }

  //on submit event of the form
  onSubmit(form) {

    var reviewBox = <HTMLElement>document.getElementById("formResultWindow");
    var formResult = <HTMLElement>document.getElementById("formResult");
    console.log(form.value);
    this.submittedForm = form.value;
    /* 
        if (!this.reactiveForm.controls['normalName'].disabled) {
          //ordinary name 
          this.name = this.submittedForm.normalName;
          this.notCustomName = true;
        } else if (!this.reactiveForm.controls['customName'].disabled) {
          //for new name doesn't exist in database
          this.name = this.submittedForm.customName;
          this.customName = true;
        } */

    if (!this.reactiveForm.controls['normalBrand'].disabled) {
      //normal brands
      this.brand = this.submittedForm.normalBrand;
      this.notCustomBrand = true;
    } else if (!this.reactiveForm.controls['customBrand'].disabled) {
      //custom brands
      this.brand = this.submittedForm.customBrand;
      this.customBrand = true;
    }


    if (!this.reactiveForm.controls['normalVersion'].disabled) {
      //normal versions
      this.version = this.submittedForm.normalVersion;
      this.notCustomVersion = true;
    } else if (!this.reactiveForm.controls['customVersion'].disabled) {
      //custom versions
      this.version = this.submittedForm.customVersion;
      this.customVersion = true;
    }

    if (!this.reactiveForm.controls['normalSpecs'].disabled) {
      //normal specs
      this.specs = this.submittedForm.normalSpecs;
      this.notCustomSpecs;
    } else if (!this.reactiveForm.controls['customSpecs'].disabled) {
      //custom brands
      this.specs = this.submittedForm.customSpecs;
      this.customSpecs

    }


    let groupName = this.groupDict.find(x => { if (x.code == this.submittedForm.group) { return x } });
    this.barcode = this.submittedForm.barcode;
    //reviewing section+++++++++++++++++++++++++++++++++++++++++++++
    formResult.innerHTML = ("ต้องการเพิ่มอะไหล่ใหม่ในหมวด" + groupName.name + " คือ " + this.name + " ยี่ห้อ " + this.brand + " รุ่น " +
      this.version + " " + this.specs + " มีราคาซื้อ " + this.submittedForm.purchase + " บาท " + "ราคาขาย " + this.submittedForm.price + " บาท " + " เป็นจำนวน " + this.submittedForm.numberOf + " หน่วย" + " ดำหนดยอดขั้นต่ำ " + this.submittedForm.threshold + " รหัสสินค้า " + this.barcode);
    reviewBox.style.display = "block";
    //end of reviewing section-------------------------------------
  }
  //accep handling section+++++++++++++++++++++
  //searchName module for name searching
  searchName(nameToSearch) {
    var found = false;

    for (var i = 0; i < this.nameList.length; i++) {
      if (this.nameList[i].name == nameToSearch) {
        this.targetName = this.nameList[i];//assign part object 
        this.targetInd = i;
        found = true;
      }
    }
    console.log(found)
    return found;
  }

  //end of searching module
  //user be sured to submit the add the part
  acceptRegist() {
    var reviewBox = <HTMLElement>document.getElementById("formResultWindow");
    reviewBox.style.display = "none";
    this.barcode = this.submittedForm.barcode;


    //newpart object
    this.newPart = {
      "groupId": this.submittedForm.group,
      "barcode": this.barcode,
      "name": this.submittedForm.name,
      "brand": this.brand,
      "version": this.version + " " + this.specs,
      "purchase": this.submittedForm.purchase,
      "price": this.submittedForm.price,
      "numberOf": this.submittedForm.numberOf,
      "sales": 0,
      "threshold": this.submittedForm.threshold,
      "status": "100",
      "order": 0

    }
    console.log(this.newPart)
    this.mbkApi.createPart(this.newPart).subscribe((part: any) => { });
    var newLog = {
      "groupId": this.submittedForm.group,
      "barcode": this.barcode,
      "actionId": "30"
    }
    console.log(newLog)
    this.mbkApi.createLog(newLog).subscribe((log: any) => { });
    //handling name++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    //get name from summitted form
    this.name = this.submittedForm.name;
    //search the name
    let found = this.searchName(this.name);
    //if the name exists

    //else if it isn't
    if (!found) {
      //for new name doesn't exist in database
      //add name to the list   
      console.log("new part data")
      this.name = this.submittedForm.name;
      var path = 'sparepart/' + this.nameList.length;
      console.log(path);
      this.db.object(path).update({ name: this.name });
      //add brand to the list
      path = 'sparepart/' + this.nameList.length + '/' + 'brands/';
      console.log(path);
      this.db.object(path).update({ 0: this.submittedForm.customBrand });
      //add version to the list
      path = 'sparepart/' + this.nameList.length + '/' + 'versions/';
      console.log(path);
      this.db.object(path).update({ 0: this.submittedForm.customVersion });
      //add specification to the list 
      path = 'sparepart/' + this.nameList.length + '/' + 'specifics/';
      console.log(path);
      this.db.object(path).update({ 0: this.submittedForm.customSpecs });
      //finish handling new part with new name brand and version
    }
    if (found) {
      //the global variable target name has been set here 
      //in case of we found the exist name 
      //then we can handling with it if user want to add new brand version or specification 
      this.name = this.targetName.name;// assign name to global name for adding new part to DB
      //end of handling name-----------------------------------------------------------


      //handling brand data++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      if (this.notCustomBrand) {
        //normal brands
        this.brand = this.submittedForm.normalBrand;
      } else if (this.customBrand) {
        //custom brands
        this.brand = this.submittedForm.customBrand; // new brand to be added 
        var brandInd = this.brandList.length;//next index for new item of the list
        var newbrand = { [brandInd]: this.brand };//new brand ob ject for brand list of target part
        console.log(newbrand)
        var path = 'sparepart/' + this.targetInd + '/' + 'brands/'; // targetInd is the target part to handling 
        console.log(path);
        this.db.object(path).update(newbrand);//adding new item to the list 

      }
      //end of handling brand-----------------------------------------
      //handling version++++++++++++++++++++++++++++++++++++++++++++++
      if (this.notCustomVersion) {
        //normal versions
        this.version = this.submittedForm.normalVersion;
      } else if (this.customVersion) {
        //custom versions
        this.version = this.submittedForm.customVersion;

        var versionInd = this.versionList.length;
        var newversion = { [versionInd]: this.version };
        console.log(newversion)
        var path = 'sparepart/' + this.targetInd + '/' + 'versions/';
        console.log(path);
        this.db.object(path).update(newversion);


      }

      //end of handling version--------------------------------------
      //handling specs+++++++++++++++++++++++++++++++++++++++++++++++
      if (this.notCustomSpecs) {
        //normal specs
        this.specs = this.submittedForm.normalSpecs;
      } else if (this.customSpecs) {
        //custom brands
        this.specs = this.submittedForm.customSpecs;
        var partBrand = "";


        var specsInd = this.specificList.length;
        var newspecs = { [specsInd]: this.specs };
        console.log(newspecs)
        var path = 'sparepart/' + this.targetInd + '/' + 'specifics/';
        console.log(path);
        this.db.object(path).update(newspecs);


      }
      //assign threshold
      // this.threshold = this.submittedForm.threshold;
      //end of handling specs---------------------------------------

    }
  }
  cancelRegist() {
    var reviewBox = <HTMLElement>document.getElementById("formResultWindow");
    reviewBox.style.display = "none";
  }
  //accept handling section-------------------

  //form control section+++++++++++++++++++++++++++++++++++++++++++++++++++++++
  genPrice() {
    var purchase = <HTMLInputElement>document.getElementById("purchase");
    var inPurchase = Number(purchase.value);
    var genPrice = (0.6 * inPurchase) + inPurchase;
    let price = { price: genPrice };
    this.reactiveForm.patchValue(price)
  }
  //following methods are for managing form input//
  //update checking custom name 
  //setCustomName() {
  //  this.reactiveForm.controls['customName'].enable();
  //  this.reactiveForm.controls['normalName'].disable();

  // }
  //setNormalName() {
  //  this.reactiveForm.controls['normalName'].enable();
  //  this.reactiveForm.controls['customName'].disable();


  //}
  //update checking custom brand variable
  setCustomBrand() {
    this.reactiveForm.controls['customBrand'].enable();
    this.reactiveForm.controls['normalBrand'].disable();

  }
  setNormalBrand() {
    this.reactiveForm.controls['normalBrand'].enable();
    this.reactiveForm.controls['customBrand'].disable();


  }
  //update checking custom version
  setCustomVersion() {
    this.reactiveForm.controls['customVersion'].enable();
    this.reactiveForm.controls['normalVersion'].disable();

  }
  setNormalVersion() {
    this.reactiveForm.controls['normalVersion'].enable();
    this.reactiveForm.controls['customVersion'].disable();


  }
  //update checking custon specification
  setCustomSpecs() {
    this.reactiveForm.controls['customSpecs'].enable();
    this.reactiveForm.controls['normalSpecs'].disable();

  }
  setNormalSpecs() {
    this.reactiveForm.controls['normalSpecs'].enable();
    this.reactiveForm.controls['customSpecs'].disable();


  }
  //end of form control section----------------------------------------------
}
