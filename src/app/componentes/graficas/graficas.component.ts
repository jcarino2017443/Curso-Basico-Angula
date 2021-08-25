import { Component, OnInit } from '@angular/core';
import { PruebaService } from 'src/app/servicios/prueba.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss'],
  providers: [PruebaService]
})
export class GraficasComponent implements OnInit {
  public pruebasArray;

  chartInicial:any = 'pie'
  chartTypes = [
    {nombreTipo: 'pie', texto: 'Cicular'},
    {nombreTipo: 'line', texto: 'lineas'},
    {nombreTipo: 'bar', texto: 'barras'}
  ]

  chartOptions = {
    responsive: true,
  };
  chartLabels:any[]=[];
  chartData:any[] =[];
  chartColors = [{
    backgroundColor: ['red', '#0F0', 'rgba(41, 182, 246,0.75)'],
    borderColor: ['rgb(250,120,100)', 'green', '#0086c3']
  }];
  chartLegend = true;
  chartPlugins = [];
  constructor(private _pruebaService: PruebaService) { }
  

  ngOnInit(): void {
    this.obtenerPruebas();

  }

  obtenerPruebas(){
    this._pruebaService.obtenerPrueba().subscribe(
      response=>{
        console.log(response)
        this.pruebasArray = response.pruebasObtenidas;
        this.pruebasArray.forEach(element => {
          this.chartLabels.push(element.ciudad)
          this.chartData.push(element.habitantes)
          
          
        });

        // for (let i = 0; i < this.pruebasArray.length; i++) {
        //    this.chartLabels.push(this.pruebasArray[i]);
        //   this.chartLabels.push(this.pruebasArray[i].habitantes)
          
        
      }
    )
  }

}
