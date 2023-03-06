import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuItemDetailsComponent } from './pages/menu-item-details/menu-item-details.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OrdersComponent } from './pages/orders/orders.component';
const routes: Routes = [
  {path:'' , component:MenuComponent},
  {path:'search/:searchTerm',component:MenuComponent},
  {path:'tag/:tag',component:MenuComponent} ,
  { path: 'menu', component:MenuComponent },
  { path: 'tables',
 loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesModule) },
  { path: 'orders', component:OrdersComponent } , 
 {path:'menu/:id',component:MenuItemDetailsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
