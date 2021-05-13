import { Component, ViewChild} from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import * as moment from 'moment';
import { Moment } from 'moment';
import { MY_FORMATS} from 'src/app/model/date-format.constant';
import { Post } from 'src/app/model/posts.interface';
import { ApiService } from 'src/app/service/api.service';

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

  posts : Array<Post> = new Array()
  date : Moment;

  postsPagination : Array<Post> = new Array()
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  showChart : boolean = false;
  chartOptions? : any;

  // MatPaginator Output
  pageEvent?: PageEvent;

  constructor(
    private apiService : ApiService,
  ){ 
    this.date = moment()
  }

  fetchAPI(){
    this.apiService.getProductsByDate(this.DateToString()).then((res)=>{
      if(res.status == 200){
        
        this.posts = res.response.results
        this.paginator.firstPage();
        this.postsPagination = this.posts.slice(0,this.pageSize)
        this.setChartOption(this.setChartData(this.posts))
      }
    })
  }
  setChartData(data : Array<Post>): Map<string,number>{
    let chartData = new Map<string,number>()
    data.forEach((post)=>{
      post.topics.forEach((topic)=>{
        if(chartData.has(topic.name)){
          chartData.set(topic.name,chartData.get(topic.name)! +1) 
        }else{
          chartData.set(topic.name,1)
        }
      })
    })
    
    return chartData
  }

  DateToString(){
    return this.date.format("YYYY-MM-DD") 
  }
  DateToRender(){
    return this.date.format("DD/MM/YYYY") 
  }

  dayBefore(){
    this.date.add(-1,'days');
    console.log(this.date);
  }
  dayAfter(){
    this.date.add(1,'days');
    console.log(this.date);
  }

  onPageChange($event : PageEvent){
    this.postsPagination = this.posts.slice($event.pageIndex*$event.pageSize,$event.pageIndex*$event.pageSize + $event.pageSize)
  }

  setChartOption(chartData : Map<string, number>){
    let topics = new Array<string>()
    let values = new Array<number>() 
    for(let topic of chartData.entries()){
        topics.push(topic[0])
        values.push(topic[1])
    }
    console.log(topics, values)
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

