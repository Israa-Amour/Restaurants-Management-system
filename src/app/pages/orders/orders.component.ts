import { Component , OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/models/Order';
import { OrderItems } from 'src/app/interfaces/models/OrderItems';
import { MenuService } from 'src/app/services/menu/menu.service';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  isPayClicked = false

  displayedColumns: string[] = ['OrderID','total', 'details', 'pay'];
  orders: Order[] = [];
  constructor(private ordersService: OrdersService) { }
  ngOnInit(): void {
    this.ordersService.getAll()
      .subscribe((orders: Order[]) => {
        this.orders = orders;
        console.log(this.orders)
      });

  }
   goToPayments(){
    this.isPayClicked = !this.isPayClicked
  }
}
