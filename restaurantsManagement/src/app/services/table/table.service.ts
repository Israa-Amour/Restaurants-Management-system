import { Injectable } from '@angular/core';
import {Table} from 'src/app/interfaces/table.interface';
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
        name:'Table 1',
      },
      {
        id:2,
        status:'Empty',
        name:'Table 2',

      },
      {
        id:3,
        status:'Busy',
        name:'Table 3',

      }
      ,
      {
        id:4,
        status:'Busy',
        name:'Table 4',

      }
      ,
      {
        id:5,
        status:'Busy',
        name:'Table 5',

      }
      ,
      {
        id:6,
        status:'Busy',
        name:'Table 6',

      },
      {
        id:7,
        status:'Busy',
        name:'Table 7',

      },
      {
        id:8,
        status:'Busy',
        name:'Table 8',

      },
      {
        id:9,
        status:'Empty',
        name:'Table 9',

      },
      {
        id:10,
        status:'Busy',
        name:'Table 10',

      }
    ]
    }
  }