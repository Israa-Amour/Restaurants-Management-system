import { Component ,OnInit} from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Tag } from 'src/app/interfaces/models/Tag';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags:Tag[] =[];
constructor(private menuService:MenuService){

}
ngOnInit():void{
  this.tags = this.menuService.getAllTags();
}
}
