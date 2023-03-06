import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/interfaces/item.interface';
import { Category } from 'src/app/interfaces/category.interface';
import { MenuService } from 'src/app/services/items/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: Item[] = [];
  categories: Category[] = [];

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryId = params?.get('categoryID');
      if (categoryId) {
        this.menuService.getItemsByCategoryId(+categoryId).subscribe(items => {
          this.items = items;
        });
      }
      else {
        this.menuService.getAllItems().subscribe(items => {
          this.items = items;
        });
      }
    });
    
    this.menuService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  getAllItems(){
    this.menuService.getAllItems().subscribe(items => {
      this.items = items;
  });
}
}