import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { OrdersPaymentDetailsComponent } from './orders-payment-details/orders-payment-details.component';

@NgModule({
  declarations: [
    OrdersComponent,
    OrdersPaymentDetailsComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    MatTableModule,
    MatCardModule
  ]
})
export class OrdersModule { }
