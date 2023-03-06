import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { OrdersPaymentDetailsComponent } from './orders-payment-details/orders-payment-details.component';
import { OrdersComponent } from './order/orders.component';

@NgModule({
  declarations: [
    OrdersComponent,
    OrdersPaymentDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatCardModule
  ]
})
export class OrdersModule { }
