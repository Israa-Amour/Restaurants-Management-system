import { Injectable } from '@angular/core';
import { Item } from 'src/app/interfaces/models/item.interface';
import { Order } from 'src/app/interfaces/models/Order';
import { OrderItems } from 'src/app/interfaces/models/OrderItems';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private order:Order = new Order();
  
  addToOrder(item: Item):void{
    let orderItem = this.order.items.find(itemObj => itemObj.menu.id === item.id);
    
    if(orderItem){
      this.changeQuantity(item.id, orderItem.quantity + 1);
      return;
    }
    this.order.items.push(new OrderItems(item));
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
