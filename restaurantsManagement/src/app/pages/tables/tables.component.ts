import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/interface/table.interface';
import { TableService } from 'src/app/services/table/table.service';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  tables:Table[] = [];
  constructor(private table: TableService ){}
  
  ngOnInit():void{
    this.tables = this.table.getAll();
  }
}
