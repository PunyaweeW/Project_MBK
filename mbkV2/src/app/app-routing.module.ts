import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components in app
import {DashboardComponent} from "../app/dashboard/dashboard.component"
import {NotificationComponent} from "../app/notification/notification.component";
import {AddItemComponent} from "../app/add-item/add-item.component"
const routes: Routes = [
  {path: '', component: DashboardComponent},
  { path: 'notification', component: NotificationComponent },
  {path: 'addItem' , component:AddItemComponent }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);