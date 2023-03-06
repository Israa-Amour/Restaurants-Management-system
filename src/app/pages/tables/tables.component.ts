import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/interfaces/table.interface';
import { TableService } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  tables:Table[] = [];
  constructor(private tableService: TableService ){}
  ngOnInit():void{
    this.tableService.getAll()
      .subscribe((tables: Table[]) => {
        this.tables = tables;
        console.log(this.tables)
      });
  }
}
