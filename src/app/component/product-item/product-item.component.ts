import { Component, Input} from '@angular/core';
import { Post } from 'src/app/model/posts.interface';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent{

  constructor() { }

  @Input() post! : Post;
  ngOnInit(): void {
  }

}
