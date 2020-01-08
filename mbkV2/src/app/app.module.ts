//basic imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,Component } from '@angular/core';
//angular material design
import { MatSidenavContainer} from "@angular/material";
import {MatSidenavModule, MatDrawerContainer,MatDrawerContent} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
//routing
import { Routes, RouterModule } from '@angular/router';
import {routing} from "../app/app-routing.module";
//components
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NotificationComponent } from './notification/notification.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//services
import { DataserviceService} from "../app/dataservice.service";
import { AddItemComponent } from './add-item/add-item.component';
//firebase 
import {environment} from "../environments/environment";
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import {AngularFireModule} from "angularfire2/";
//form

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NotificationComponent,
    DashboardComponent,
    AddItemComponent,
    

  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
     DataserviceService,
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
