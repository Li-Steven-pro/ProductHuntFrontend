
import { Component, ViewChild , Input} from '@angular/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from "ng-apexcharts";

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  grid: ApexGrid ;
  colors: string[] ;
  legend: ApexLegend ;
};


@Component({
  selector: 'app-topic-chart',
  templateUrl: './topic-chart.component.html',
  styleUrls: ['./topic-chart.component.css']
})
export class TopicChartComponent{
  @ViewChild("chart") chart?: ChartComponent;
  
  @Input() chartOptions!: ChartOptions;

  constructor() {

  }

}
