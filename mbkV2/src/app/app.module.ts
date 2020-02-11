//basic imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
//angular material design
import { MatSidenavContainer } from "@angular/material";
import { MatSidenavModule, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
//materialdesign and icons
import { MatCardModule } from '@angular/material/card';

import { MatInputModule, MatBadgeModule, MatButtonModule } from '@angular/material';
//routing
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from "../app/app-routing.module";
//components

import { AddItemComponent } from './add-item/add-item.component';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StockpageComponent } from './stockpage/stockpage.component';
import { NotificationComponent } from './notification/notification.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogComponent } from './log/log.component';
import { OrderingComponent } from './ordering/ordering.component';
//grid
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { EditService, ToolbarService, SortService, CommandColumnService, PageService } from '@syncfusion/ej2-angular-grids';
//services
import { DataserviceService } from "../app/dataservice.service";
import { MbkApiService } from "../app/mbk-api.service";
//firebase 
import { environment } from "../environments/environment";
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { AngularFireModule } from "angularfire2/";
//form

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//http
import { HttpClientModule } from '@angular/common/http';
//table
import { MatTableModule } from '@angular/material/table';
//links
import { LocationStrategy, PathLocationStrategy, HashLocationStrategy } from '@angular/common';
//pdf
//datepicker
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from './format-datepicker';
//chart 
import { ChartModule } from 'angular2-chartjs';



@NgModule({
  declarations: [
    AddItemComponent,
    AppComponent,
    DashboardComponent,
    LogComponent,
    NotificationComponent,
    SidenavComponent,
    StockpageComponent,
    OrderingComponent

  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    BrowserModule,
    ChartModule,
    FormsModule,
    GridModule,
    HttpClientModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,

  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
    DataserviceService,
    MbkApiService, PageService,
    EditService, ToolbarService, SortService, CommandColumnService, MatDatepickerModule
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
