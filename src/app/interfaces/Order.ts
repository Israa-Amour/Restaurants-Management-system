import { OrderItems } from "./OrderItems";

export class Order{
    orderId!: number;
   total!: number ; 
   table! : string ; 
   details!:string ; 
   /////////////
    items:OrderItems[] = [];

    get totalPrice(): number{
        let totalPrice = 0;
        this.items.forEach(item => {
            totalPrice += item.price;
        });

        return totalPrice;
    }
}