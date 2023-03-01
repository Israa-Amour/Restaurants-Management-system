import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoryComponent } from './category/category.component';
import { MatCard, MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryComponent,
    
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MatCardModule
  ]
})
export class CategoriesModule { 
}
