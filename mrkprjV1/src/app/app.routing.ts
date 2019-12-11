import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockpageComponent } from './stockpage/stockpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { LogComponent } from './log/log.component';
import { AddItemComponent } from './add-item/add-item.component';
import { NotificationComponent } from './notification/notification.component';
import {SideNavComponent} from './side-nav/side-nav.component';
const appRoutes: Routes = [
  {path: '', component: DashboardComponent },
   {path: 'stock', component: StockpageComponent},
   {path: 'report', component: ReportComponent },
   {path: 'log', component: LogComponent },
   {path: 'additem', component: AddItemComponent },
   {path: 'notify', component: NotificationComponent },
   {path: 'sideNav', component:SideNavComponent}
  
  ]
 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);