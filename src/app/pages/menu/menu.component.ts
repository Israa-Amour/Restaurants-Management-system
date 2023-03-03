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
    // Subscribe to changes in the route parameters
    this.route.paramMap.subscribe(params => {
      const categoryId = params?.get('categoryID');
      if (categoryId) {
        // Get the items for the selected category
        //we use the + to convert categoryId from a string to a number, cause the getItemsByCategoryId method parameter is a number.
        this.menuService.getItemsByCategoryId(+categoryId).subscribe(items => {
          this.items = items;
        });
      }
      else {
        // Get all items
        this.menuService.getAll().subscribe(items => {
          this.items = items;
        });
      }
    });
    

    // Get all categories
    this.menuService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}