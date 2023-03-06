import { Component ,Input,OnInit} from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Tag } from 'src/app/interfaces/models/Tag';
import { inputs } from '@syncfusion/ej2-angular-layouts/src/splitter/splitter.component';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input() 
  menuItemDetailsTags?:string[]  ; 

  @Input()
  justifyConent:string = 'center' ; 
  tags?:Tag[];
constructor(private menuService:MenuService){

}
ngOnInit():void{
  if(!this.menuItemDetailsTags)
  this.tags = this.menuService.getAllTags();
}
}
