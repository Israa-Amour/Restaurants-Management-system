import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/interfaces/models/orders.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { OrderDetails } from 'src/app/interfaces/models/orderDetails.interface';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.serverUrl}/orders`);
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`${environment.serverUrl}/findOrder/${id}`);
  }
  findDetailsByOrdersID(orderID: number): Observable<OrderDetails[]> {
    return this.http.get<OrderDetails[]>(`${environment.serverUrl}/${orderID}/details`);
  }
}
