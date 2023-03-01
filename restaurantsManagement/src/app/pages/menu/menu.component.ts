import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { ActivatedRoute } from '@angular/router';
import { Menu } from 'src/app/interface/models/Menu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menus:Menu[]=[] ;

  constructor(private menuService:MenuService , private route:ActivatedRoute ){}

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
      this.menus  = this.menuService.getAllMenuBySearchTerm(params['searchTerm']);
      else if(params['tag'])
      this.menus = this.menuService.getAllMenuByTag(params['tag']) ;

      else
      this.menus = this.menuService.getAll() ;

    })
  }
}
