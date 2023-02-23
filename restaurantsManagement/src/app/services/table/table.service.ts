import { Injectable } from '@angular/core';
import {Table} from 'src/app/interface/table.interface';
@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }
    getAll(): Table[]{
      return[
        {
        id:1,
        status:'Empty',
      },
      {
        id:2,
        status:'Empty',
      },
      {
        id:3,
        status:'Busy',
      }
      ,
      {
        id:4,
        status:'Busy',
      }
      ,
      {
        id:5,
        status:'Busy',
      }
      ,
      {
        id:6,
        status:'Busy',
      },
      {
        id:7,
        status:'Busy',
      },
      {
        id:8,
        status:'Busy',
      },
      {
        id:9,
        status:'Empty',
      },
      {
        id:10,
        status:'Busy',
      }
    ]
    }
  }