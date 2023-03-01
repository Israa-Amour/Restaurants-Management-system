import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Table } from 'src/app/interface/table.interface';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private apiUrl = 'http://localhost:8084';

  constructor(private http: HttpClient) { }
  
  getAll(){
    return this.http.get<Table[]>(`${this.apiUrl}/tables`);
  }

  add(table: Table): Observable<Table> {
    return this.http.post<Table>(`${this.apiUrl}/addTable`, table);
  }

  update(table: Table): Observable<Table> {
    return this.http.put<Table>(`${this.apiUrl}/updateTable/${table.id}`, table);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteTable/${id}`);
  }
}