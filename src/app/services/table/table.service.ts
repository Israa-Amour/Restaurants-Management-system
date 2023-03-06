import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Table } from 'src/app/interfaces/table.interface';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Table[]>(`${environment.serverUrl}/tables`);
  }
}
