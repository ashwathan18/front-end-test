import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

import { AnalyticsDataService } from '../../providers/analytics-data.service';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
   lineChart;
   barChart;
   doughnutChart;

   analyticsData;
   baseTimeStamp;
   dataSpeedSets = [];
   dataCountSets = [];
   labels = [];
   doughnutLabels = [];
   doughnutColors = [];
   doughnutData = [];
   doughnutConfig = {
    type: 'doughnut',

    data: {
      datasets: [{
        data: this.doughnutData,
        backgroundColor: this.doughnutColors,
        label: 'Dataset 1'
      }],
      labels: this.doughnutLabels
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Speed Average '
      }
    }
  };

   config = {
    type: 'line',
    data: {
      labels: this.labels,
      datasets: this.dataSpeedSets
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Speed'
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Time'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'km'
          }
        }]
      }
    }
    };

    barChartData = {
			labels: ['1'],
			datasets: this.dataCountSets
		};
  constructor(private anlyticsDataProvider : AnalyticsDataService) { 
    this.getData();
  }

  ngOnInit() {

  }
  getData(){
    //Load given json
    this.anlyticsDataProvider.getJSON().subscribe(res => {
      this.analyticsData = res;
      this.generateData();
    },
    err => console.log(err));
  }  
  generateData(){
    //prepare data and create the chart data
    this.analyticsData.forEach(data => {
      var color = [this.getRandomColor(), this.getRandomColor()];
      this.dataSpeedSets.push({
        label: data.zoneId,
        backgroundColor: color[0],
        borderColor: color[0],
        data: [data.data.speed],
        lineTension: 0,
        fill: false
      });
      this.dataCountSets.push({
        label: data.zoneId,
        backgroundColor: color[1],
        borderColor: color[1],
        borderWidth:1,
        data: [data.data.count]
      });
      this.doughnutData.push(data.data.speed);
      this.doughnutLabels.push(data.zoneId);
      this.doughnutColors.push(this.getRandomColor());
      this.baseTimeStamp = data.data.time;
      var d = this.getHoursForTimeStamp(this.baseTimeStamp);
      this.labels.push(d.getHours() + ":" + d.getMinutes());
    });
    var ctx = (<HTMLCanvasElement>document.getElementById('canvas')).getContext('2d');
    this.lineChart = new Chart(ctx, this.config); //Line chart
    
    var ctx2 = (<HTMLCanvasElement>document.getElementById('barcanvas')).getContext('2d');
    var a = {
      type: 'bar',
      data: this.barChartData,
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Count'
        }
      }
    };
    this.barChart = new Chart(ctx2, a); //barchart
    this.barChart.update();


    var ctx3 = (<HTMLCanvasElement>document.getElementById('piecanvas')).getContext('2d');//donought chart
    this.doughnutChart = new Chart(ctx3, this.doughnutConfig);

    this.changeDataSet();// Start the interval 
  }
  changeDataSet(){
    setInterval(()=>{
      this.baseTimeStamp += 30000;
      var d = this.getHoursForTimeStamp(this.baseTimeStamp);
      this.config.data.labels.push(d.getHours() + ":" + d.getMinutes());
      this.config.data.labels.splice(0,1);
      this.config.data.datasets.forEach((dataset, i) => {
        var speed = 10 * Math.random();
        dataset.data.push( speed );
        if(dataset.data.length > 5){
          dataset.data.splice(0,1);
        }
        this.doughnutData[i] = (this.doughnutData[i] + speed) / 2; //Calculate average
      });

      this.lineChart.update();
      this.doughnutChart.update();
      this.dataCountSets.forEach(data=>{
        data.data[0] = 10 * Math.random();
      });
      this.barChart.update();
    }, 30000);
  }

  getHoursForTimeStamp(timestamp){
    var d = new Date(timestamp);

    return d;
  }
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
