import { Item } from "./item.interface";

export class OrderItems{
    constructor(menu:Item){
      this.menu = menu;  
    }
    
    menu:Item;
    quantity:number = 1;

    // price specific order item 
    get price():number{
        return this.menu.itemPrice * this.quantity;
    }
}