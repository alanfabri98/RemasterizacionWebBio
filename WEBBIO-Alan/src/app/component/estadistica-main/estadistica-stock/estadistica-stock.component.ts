import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { Categoria } from 'src/app/models/stock-usuarios/categoria';
import { StockUsuarios } from 'src/app/models/stock-usuarios/stock-usuarios';
import { StockUsuariosService } from 'src/app/services/rtp-stock-usuarios/stock-usuarios.service';

@Component({
  selector: 'app-estadistica-stock',
  templateUrl: './estadistica-stock.component.html',
  styleUrls: ['./estadistica-stock.component.css']
})
export class EstadisticaStockComponent implements OnInit {

  constructor(
    ) { }



  ngOnInit(): void {
  }



}//end class
