import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';
//components in app
import { DashboardComponent } from "../app/dashboard/dashboard.component"
import { NotificationComponent } from "../app/notification/notification.component";
import { AddItemComponent } from "../app/add-item/add-item.component"
import { StockpageComponent } from './stockpage/stockpage.component';
import { LogComponent } from './log/log.component';
import { OrderingComponent } from './ordering/ordering.component';
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'addItem', component: AddItemComponent },
  { path: 'stock', component: StockpageComponent },
  { path: 'log', component: LogComponent },

  { path: 'ordering', component: OrderingComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules // <-This is our preloading
    }

  )
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);