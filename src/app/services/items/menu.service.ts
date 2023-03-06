import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
import { Item } from 'src/app/interfaces/item.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get<Category[]>(`${environment.serverUrl}/categories`);
  }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.serverUrl}/items`);
  }

  getItemsByCategoryId(categoryID: number): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.serverUrl}/categories/${categoryID}/items`);
  }
}
