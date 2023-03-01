import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  @Input() name: string = ''
  @Input() imageUrl: string = ''

  @Output() onClick: EventEmitter<string> = new EventEmitter<string>()


  click() {
    this.onClick.emit(this.name)
  }
}
