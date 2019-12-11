import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StockpageComponent } from './stockpage/stockpage.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule,MatBadgeModule, MatButtonModule,} from '@angular/material';
import { ChartModule } from 'angular2-chartjs';
import 'chart.piecelabel.js';
import { HttpClientModule } from '@angular/common/http';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { EditService, ToolbarService, SortService,CommandColumnService  } from '@syncfusion/ej2-angular-grids';

 
import { 
   IgxButtonModule,
   
	IgxIconModule,
	IgxLayoutModule,
	IgxNavigationDrawerModule,
	IgxRadioModule,
	IgxRippleModule,
	IgxSwitchModule,
	IgxToggleModule
 } from "igniteui-angular";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { LogComponent } from './log/log.component';
import { AddItemComponent } from './add-item/add-item.component';
import { NotificationComponent } from './notification/notification.component';
import { ChildComponent } from './child/child.component';
 
@NgModule({
  declarations: [
    
    AppComponent,
    SideNavComponent,
    StockpageComponent,
    DashboardComponent,
    ReportComponent,
    LogComponent,
    AddItemComponent,
    NotificationComponent,
    ChildComponent
  ],
  imports: [
    GridModule,
    MatBadgeModule, MatButtonModule,
    FormsModule,
    ChartModule,
    MatCardModule,
    FlexLayoutModule,
    AngularMaterialModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    routing,
    IgxButtonModule,
    IgxIconModule,
    IgxLayoutModule,
    IgxNavigationDrawerModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSwitchModule,
    IgxToggleModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
    
   ],
   providers: [EditService, ToolbarService, SortService,CommandColumnService ],
  bootstrap: [AppComponent]
})
export class AppModule {}
 