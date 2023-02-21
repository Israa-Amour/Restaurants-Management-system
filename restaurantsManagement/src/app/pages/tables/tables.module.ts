import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TablesComponent
    ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    MatCardModule,
    FormsModule,
    CommonModule,
  ]
})
export class TablesModule { }
