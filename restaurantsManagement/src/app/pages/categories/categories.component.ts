import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/category/category.service';
import { CategoriesModule } from './categories.module';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: CategoriesModule[] = [];
  constructor(private foodService: FoodService) {

  }

  ngOnInit(): void {
    this.categories = this.foodService.getAll();

  }
}
