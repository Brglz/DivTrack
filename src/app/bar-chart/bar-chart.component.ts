import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis } from 'ng-apexcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  dividendData = [18.44, 22.44, 13.22, 27.44, 18.44, 22.44, 13.22, 27.44, 18.44, 22.44, 13.22, 27.44];

  constructor() { }

  ngOnInit(): void {
    this.initializeChartData();
  }

  private initializeChartData() {
    this.title = {
      text: "Dividend Income"
    };

    this.series = [{
      name: "Dividend",
      data: this.dividendData,
      color: '#73BF78'
    }]

    this.chart = {
      type: 'bar',
      width: 750,
      height: 270,
      toolbar: {
        show: false
      },
    }

    this.xaxis = {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      position: "bottom"
    }

  }

  private addDollarSign(dividendData) {
    console.log(dividendData.map(value => '$' + value));
    
    return dividendData.map(value => '$' + value)
  }

}
