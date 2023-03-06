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
order!:Order;
  constructor(private orderService: OrderService ) {
    this.setOrder();
  displayedColumns: string[] = ['OrderID','total', 'details', 'pay'];
  orders: Order[] = [];
  constructor(private ordersService: OrdersService) { }
  removeFromOrder(orderItems:OrderItems){
    this.orderService.removeFromOrder(orderItems.menu.id);
    this.setOrder();
  }

  changeQuantity(orderItems:OrderItems, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.orderService.changeQuantity(orderItems.menu.id, quantity);
    this.setOrder();
  }

  setOrder(){
    this.order = this.orderService.getOrder();
  }
  ngOnInit(): void {
  }
}
}
