import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Item } from 'src/app/interfaces/models/item.interface';
import { Category } from 'src/app/interfaces/models/category.interface';

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
        this.menuService.getAll().subscribe(items => {
          this.items = items;
        });
      }
    });
    
    this.menuService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}