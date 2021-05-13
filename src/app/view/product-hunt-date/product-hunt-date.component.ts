import { Component} from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import { MY_FORMATS} from 'src/app/model/date-format.constant';
import { Post } from 'src/app/model/posts.interface';
import { ApiService } from 'src/app/service/api.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-product-hunt-date',
  templateUrl: './product-hunt-date.component.html',
  styleUrls: ['./product-hunt-date.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class ProductHuntDateComponent {

  posts : Array<Post> = new Array()

  date : Moment;
  breakpoint: number;

  gridByBreakpoint = {
    xl: 5,
    lg: 4,
    md: 3,
    sm: 3,
    xs: 2
  }

  constructor(
    private apiService : ApiService,
    private breakpointObserver: BreakpointObserver
  ){ 
    this.date = moment()
    this.breakpoint = 5;

    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.breakpoint = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.breakpoint = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.breakpoint = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.breakpoint= this.gridByBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.breakpoint = this.gridByBreakpoint.xl;
        }
      }
    });
  }

  fetchAPI(){
    this.apiService.getProductsByDate(this.DateToString()).then((res)=>{
      if(res.status == 200){
        this.posts = res.response.results
      }
    })
  }

  DateToString(){
    return this.date.year()+'-'+this.date.month()+'-'+this.date.date()
  }
}

