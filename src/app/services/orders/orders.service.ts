import { Injectable } from '@angular/core';
import { Order } from 'src/app/interfaces/models/orders.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }
  orders: Order[]=[
      {
        orderId: 1,
        total: 200,
        table: 'Table 1',
        details: 'not spicy',
      },
      {
        orderId: 2,
        total: 200,
        table: 'Table 1',
        details: 'not spicy',
      },
      {
        orderId: 3,
        total: 20,
        table: 'Table 1',
        details: 'not spicy',
      },
      {
        orderId: 4,
        total: 200,
        table: 'Table 1',
        details: 'not spicy',
      },
      {
        orderId: 5,
        total: 60,
        table: 'Table 1',
        details: 'not spicy',
      },
      {
        orderId: 6,
        total: 40,
        table: 'Table 3',
        details: 'not spicy',
      },
      {
        orderId: 7,
        total: 80,
        table: 'Table 7',
        details: 'not spicy',
      },
      {
        orderId: 8,
        total: 24,
        table: 'Table 2',
        details: 'not spicy',
      }
    ];
    getAll(): Order[]{
      return this.orders;
    }

}
