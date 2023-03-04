import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    MatTableModule
  ]
})
export class OrdersModule { }
