import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];
  constructor(private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.categories = this.categoryService.getAll();

  }

  handleEvent(name: string) {
    console.log("name=",name);

  }
}
