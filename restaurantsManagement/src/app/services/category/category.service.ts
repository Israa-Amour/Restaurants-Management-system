import { Injectable } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  getAll(): Category[] {
    return [
      {
        id: 1,
        name: 'Pizza',
        imageUrl: "assets/images/pizza.jpg",

      },
      {
        id: 2,
        name: 'Pasta',
        imageUrl: "assets/images/pasta.jpg",

      },
      {
        id: 3,
        name: 'Burgres',
        imageUrl: "assets/images/burgre.jpg",

      },
      {
        id: 4,
        name: 'Main Courses',
        imageUrl: "assets/images/mainCouse.jpg",

      },
      {
        id: 5,
        name: 'Fries',
        imageUrl: "assets/images/fries.jpg",

      },
      {
        id: 6,
        name: 'Salads',
        imageUrl: "assets/images/salad.jpg",

      },


      {
        id: 7,
        name: 'Sandwiches',
        imageUrl: "assets/images/sandwatch.jpg",


      },


      {
        id: 8,
        name: 'Soups',
        imageUrl: "assets/images/soup.jpg",

      },


      {
        id: 9,
        name: 'Drinks',
        imageUrl: "assets/images/drinks.jpg",


      },


      {
        id: 10,
        name: 'Sweets ',
        imageUrl: "assets/images/sweet.jpg",


      },






    ]

  }



}
