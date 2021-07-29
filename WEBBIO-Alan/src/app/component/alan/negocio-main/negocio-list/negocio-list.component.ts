import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
//import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { Stock } from 'src/app/models/stock/stock';
import { StockService } from 'src/app/services/rtp-stock/stock.service';
//'chartjs-plugin-datalabels'
@Component({
  selector: 'app-negocio-list',
  templateUrl: './negocio-list.component.html',
  styleUrls: ['./negocio-list.component.css']
})
export class NegocioListComponent implements OnInit{

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
//----------esto es para un Usuario--------------------
  public barChartLabels: Label[] = ['Mascarillas', 'Trajes', 'Guantes', 'Otros'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;


  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Mascarillas' },
    { data: [28, 47, 40, 19, 86, 27, 90], label: 'Trajes' },
    { data: [28, 8, 20, 19, 86, 27, 90], label: 'Guantes' },
    { data: [28, 68, 30, 19, 86, 27, 90], label: 'Otros' }
  ];


  reporteMasComprado : Stock[];

  constructor(
    private stockService:StockService
  ) { }

  ngOnInit() {
    
  }

  //stock
  datos(){
    this.stockService.list(localStorage.getItem('id')).subscribe(res=>{
      this.reporteMasComprado=res
    })
    //this.reporteMasComprado.forEach()
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      56,
      (Math.random() * 99),
      (Math.random() * 89),
      125,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }


}
