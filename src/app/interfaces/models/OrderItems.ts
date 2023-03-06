import { Menu } from "./Menu";
export class OrderItems{
    constructor(menu:Menu){
      this.menu = menu;  
    }
    
    menu:Menu;
    quantity:number = 1;

    // price specific order item 
    get price():number{
        return this.menu.price * this.quantity;
    }
}