import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Table } from 'src/app/interfaces/models/table.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private apiUrl = 'http://localhost:8084';
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Table[]>(`${environment.serverUrl}/tables`);
  }

  add(table: Table): Observable<Table> {
    return this.http.post<Table>(`${environment.serverUrl}/addTable`, table);
  }

  update(table: Table): Observable<Table> {
    return this.http.put<Table>(`${environment.serverUrl}/updateTable/${table.id}`, table);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.serverUrl}/deleteTable/${id}`);
  }
}
