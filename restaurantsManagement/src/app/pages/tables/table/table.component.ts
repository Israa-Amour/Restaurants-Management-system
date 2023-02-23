import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
 
  @Input() id=0 ;
  @Input() status='';
  @Input() name='';

  
}
