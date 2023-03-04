import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/models/orders.interface';
import { OrdersService } from 'src/app/services/orders/orders.service';
import {MatDialog} from '@angular/material/dialog';
import { OrdersPaymentDetailsComponent } from 'src/app/pages/orders-payment-details/orders-payment-details.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  displayedColumns: string[] = ['OrderID','total', 'details', 'pay'];
  orders: Order[] = [];
  constructor(private ordersService: OrdersService,private matDialog:MatDialog) {

   }
   onClickDialogOpen(){
    this.matDialog.open(OrdersPaymentDetailsComponent);


}
  ngOnInit(): void {
    this.ordersService.getAll()
      .subscribe((orders: Order[]) => {
        this.orders = orders;
        console.log(this.orders)
      });

  }

}
