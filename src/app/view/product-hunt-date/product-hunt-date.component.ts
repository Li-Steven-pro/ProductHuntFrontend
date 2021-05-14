import { Component, ViewChild} from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import * as moment from 'moment';
import { Moment } from 'moment';
import { MY_FORMATS} from 'src/app/model/date-format.constant';
import { Post } from 'src/app/model/posts.interface';
import { ApiService, ResComp } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-product-hunt-date',
  templateUrl: './product-hunt-date.component.html',
  styleUrls: ['./product-hunt-date.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class ProductHuntDateComponent {
  @ViewChild('paginator') paginator!: MatPaginator;

  // Data for user input, query, and posts result
  posts : Array<Post> = new Array()
  date : Moment;

  // Paginator information : posts to show 
  postsPagination : Array<Post> = new Array()
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // Chart
  showChart : boolean = false;
  chartOptions? : any;

  constructor(
    //Service using query to retrieve posts
    private apiService : ApiService,
  ){ 
    this.date = moment()
  }

  // Get data from backend
  async fetchAPI(){
    let statTopics : Map<string,number>;
    let response : ResComp = await this.apiService.getProductsByDate(this.DateToString())
    if(response.name.length > 0){
      this.posts = response.name
      this.paginator.firstPage();
      this.postsPagination = this.posts.slice(0,this.pageSize)
      this.setChartOption(response.statTopic)
    }
  }

  // Format for query
  DateToString(){
    return this.date.format("YYYY-MM-DD") 
  }

  // Format to render for page
  DateToRender(){
    return this.date.format("DD/MM/YYYY") 
  }

  // Set a day before in the date
  dayBefore(){
    this.date.add(-1,'days');
  }
  //Set a day after in the date
  dayAfter(){
    this.date.add(1,'days');
  }

  // Change the posts list to show when the paginator state change
  onPageChange($event : PageEvent){
    this.postsPagination = this.posts.slice($event.pageIndex*$event.pageSize,$event.pageIndex*$event.pageSize + $event.pageSize)
  }

  // Set the chart data 
  setChartOption(chartData : Map<string, number>){
    let topics = new Array<string>()
    let values = new Array<number>() 
    for(let topic of chartData.entries()){
        topics.push(topic[0])
        values.push(topic[1])
    }
    this.chartOptions = {
      series: [
        {
          name: this.DateToString(),
          data: values
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: ()=>{}
        }
      },
      colors: [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#546E7A",
        "#26a69a",
        "#D10CE8"
      ],
      plotOptions: {
        bar: {
          columnWidth: "50%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"]
        }
      },
      xaxis: {
        categories: topics,

        labels: {
          rotate: -45
        },
        tickPlacement: "on"
      }
    }
    this.showChart = true
  }
}

