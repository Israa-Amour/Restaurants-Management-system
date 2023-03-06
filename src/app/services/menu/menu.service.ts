import { Injectable } from '@angular/core';
import { Tag } from 'src/app/interfaces/models/Tag';
import { Menu } from 'src/app/interfaces/models/Menu';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenuById(id: number) : Menu{
    return this.getAll().find(
      menu => menu.id == id)! ; 
  }
  getAllMenuBySearchTerm(searchTerm:string) :Menu[]{
    return  this.getAll().filter(menu =>
      menu.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[]{
    return [
      { name: 'All' },
      { name: 'FastFood' },
      { name: 'Pizza' },
      { name: 'Lunch'},
      { name: 'Drinks' },
      { name: 'Hamburger' },
      { name: 'Fry'},
      { name: 'Soup' },
    ];
  }
  getAllMenuByTag(tag:string):Menu[]{
    return tag == "All" ?
    this.getAll() :
    this.getAll().filter(menu => menu.tags?.includes(tag));
  }

  getAll():Menu[]{
    return[
      {
        id: 1,
        name: 'Pizza Pepperoni',
        price: 10,
        origins: ['italy'],
        imageUrl: '/assets/images/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        origins: ['persia', 'middle east', 'china'],
        imageUrl: '/assets/images/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        origins: ['germany', 'us'],
        imageUrl: '/assets/images/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        origins: ['belgium', 'france'],
        imageUrl: '/assets/images/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        origins: ['india', 'asia'],
        imageUrl: '/assets/images/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        origins: ['italy'],
        imageUrl: '/assets/images/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },

    ]
  }

}
