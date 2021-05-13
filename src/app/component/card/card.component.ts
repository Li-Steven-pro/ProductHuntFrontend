import { Component, Input} from '@angular/core';
import { Post } from 'src/app/model/posts.interface';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() post! : Post;
  constructor() { }
}
