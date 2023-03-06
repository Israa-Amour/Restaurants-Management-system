import { Injectable } from '@angular/core';
import { Order } from 'src/app/interfaces/models/Order';
import { Menu } from 'src/app/interfaces/models/Menu';
import { OrderItems } from 'src/app/interfaces/models/OrderItems';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private order:Order = new Order();
  
  addToOrder(menu: Menu):void{
    let orderItem = this.order.items.find(item => item.menu.id === menu.id);
    
    if(orderItem){
      this.changeQuantity(menu.id, orderItem.quantity + 1);
      return;
    }
    this.order.items.push(new OrderItems(menu));
  }

  removeFromOrder(menuId:number): void{
    this.order.items = 
    this.order.items.filter(item => item.menu.id != menuId);
  }

  changeQuantity(menuId:number, quantity:number){
    let menuItem = this.order.items.find(item => item.menu.id === menuId);
    if(!menuItem) return;
    menuItem.quantity = quantity;
  }

  getOrder():Order{
    return this.order;
  }
}
