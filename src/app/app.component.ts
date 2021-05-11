import { Component } from '@angular/core';
import {ApiService} from './service/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductHuntFrontend';

  constructor(private apiService : ApiService){
    apiService.getProductsByDate("2021-03-03").then((res)=>{
      console.log(res)
    })
  }


}
