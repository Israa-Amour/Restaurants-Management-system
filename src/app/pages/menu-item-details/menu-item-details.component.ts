import { Component,OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/models/Menu';
import { MenuService } from 'src/app/services/menu/menu.service';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-menu-item-details',
  templateUrl: './menu-item-details.component.html',
  styleUrls: ['./menu-item-details.component.css']
})
export class MenuItemDetailsComponent implements OnInit{
  menu!: Menu;
  constructor(private activatedRoute:ActivatedRoute,
    private menuService: MenuService,
    private orderService:OrderService , 
    private router: Router) { 
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.menu = menuService.getMenuById(params['id']);
      
    })

  }
  ngOnInit():void{}
  addToOrder(){
    this.orderService.addToOrder(this.menu);
    this.router.navigateByUrl('/orders');
  }
}
