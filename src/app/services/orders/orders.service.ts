import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/interfaces/models/orders.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.serverUrl}/orders`);
  }

  add(order: Order): Observable<Order> {
    return this.http.post<Order>(`${environment.serverUrl}/addOrder`, order);
  }
  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`${environment.serverUrl}/findOrder/${id}`);
  }
  update(order: Order): Observable<Order> {
    return this.http.put<Order>(`${environment.serverUrl}/updateOrder/${order.id}`, order);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.serverUrl}/deleteOrder/${id}`);
  }

}
