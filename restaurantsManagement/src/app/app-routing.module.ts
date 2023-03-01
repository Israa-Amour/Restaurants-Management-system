import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
const routes: Routes = [
  { path: 'tables', loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesModule) } ,
  {path:'' , component:MenuComponent},
  {path:'search/:searchTerm',component:MenuComponent},
  {path:'tag/:tag',component:MenuComponent} ,
  { path: 'menu', component:MenuComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
