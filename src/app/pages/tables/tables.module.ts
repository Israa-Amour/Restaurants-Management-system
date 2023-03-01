import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    TablesComponent,
    TableComponent
    ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    FormsModule,
    CommonModule,
    MatCardModule
  
  ]
})
export class TablesModule {  
}
