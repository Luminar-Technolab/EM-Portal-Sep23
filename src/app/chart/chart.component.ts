import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions={}
  constructor(){
    this.chartOptions = {
      chart: {
          type: 'pie'
      },
      title: {
          text: 'Project Completion Report, 2023'
      },
      tooltip: {
          valueSuffix: '%'
      },
      plotOptions: {
          series: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: [{
                  enabled: true,
                  distance: 20
              }, {
                  enabled: true,
                  distance: -40,
                  format: '{point.percentage:.1f}%',
                  style: {
                      fontSize: '1.2em',
                      textOutline: 'none',
                      opacity: 0.7
                  },
                  filter: {
                      operator: '>',
                      property: 'percentage',
                      value: 10
                  }
              }]
          }
      },
      credits:{
        enabled:false
      },
      series: [
          {
              name: 'Percentage',
              colorByPoint: true,
              data: [
                  {
                      name: 'Chrome',
                      y: 55.02
                  },
                  {
                      name: 'Edge',
                      sliced: true,
                      selected: true,
                      y: 26.71
                  },
                  {
                      name: 'Firefox',
                      y: 1.09
                  },
                  {
                      name: 'Safari',
                      y: 15.5
                  },
                  {
                      name: 'Opera',
                      y: 1.68
                  }
              ]
          }
      ]
  }
  HC_exporting(Highcharts);
  }
}
