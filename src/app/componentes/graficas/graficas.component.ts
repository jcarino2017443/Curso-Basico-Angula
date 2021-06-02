import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss']
})
export class GraficasComponent implements OnInit {
  chartOptions = {
    responsive: true,
  };
  chartLabels = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  chartData = [300, 500, 100];
  chartColors = [{
    backgroundColor: ['red', '#0F0', 'rgba(41, 182, 246,0.75)'],
    borderColor: ['rgb(250,120,100)', 'green', '#0086c3']
  }];
  chartLegend = true;
  chartPlugins = [];
  constructor() { }
  

  ngOnInit(): void {
  }

}
