import { Component , OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/Order';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  isPayClicked = false

  displayedColumns: string[] = ['OrderID','total', 'details', 'pay'];
  orders: Order[] = [];
  constructor() { }
  ngOnInit(): void {
  
  }
   goToPayments(){
    this.isPayClicked = !this.isPayClicked
  }
}
