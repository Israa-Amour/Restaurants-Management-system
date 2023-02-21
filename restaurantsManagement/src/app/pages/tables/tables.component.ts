import { Component } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {

  numbers = Array.from(Array(12).keys()).map(x => x + 1);

  cards = this.numbers.map(id => ({ id, status: 'Empty' }));

  changeCardStatus(card: any) {
    if (card.status === 'Busy') {
      card.status = 'Busy';
    } else {
      card.status = 'Empty';
    }
  }
}
