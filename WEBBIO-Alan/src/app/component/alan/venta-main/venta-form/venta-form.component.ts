//Mi stock
import { Component, OnInit } from '@angular/core';
import { faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Articulo } from 'src/app/models/articulo/articulo';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';
import { ActivatedRoute } from '@angular/router';

import { StockService } from 'src/app/services/rtp-stock/stock.service';
import { StockUsuariosService } from 'src/app/services/rtp-stock-usuarios/stock-usuarios.service';
import { SingleDataSet, Label } from 'ng2-charts';
import * as Chart from 'chart.js';
import { Stock } from 'src/app/models/stock/stock';
import { StockUsuarios } from 'src/app/models/stock-usuarios/stock-usuarios';

@Component({
  selector: 'app-venta-form',
  templateUrl: './venta-form.component.html',
  styleUrls: ['./venta-form.component.css']
})
export class VentaFormComponent implements OnInit {

  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  ///Alan
  reporteStock =[];
  cantidad : SingleDataSet=[];
  nombres : Label[] =[];

  // Nuevo
  reporteStockUsuarios : StockUsuarios[];
  nombresUsuarios : Label[];
  categoriaUsuarios : Label[];
  cantidades : SingleDataSet=[];
  ///////

  listArticulo : Articulo[];

  constructor(private articuloService: ArticuloService,
    private activatedRoute : ActivatedRoute, private stockUsuariosService : StockUsuariosService,
    //Alan
    private stockService : StockService) { }

  ngOnInit(): void {
    this.listArticulos('Mascarillas');
    //Alan
    this.list();
  }

  listArticulos(criterio) : void {
    this.articuloService.listArticulosUser(criterio).subscribe(
      result => {
        this.listArticulo = result
      }
    );
  }

  //Alan
  list(): void {
    this.stockService.list(parseInt(localStorage.getItem('id'))).subscribe(res => {
      this.reporteStock = res;
      this.datos();
    },err=>{
      console.log(err)
    })
  }

  listArticulosUsuarios(): void {
    this.stockUsuariosService.list().subscribe(res => {
      this.reporteStockUsuarios = res;
      this.datosStockUsuarios();
    })
  }

  datosStockUsuarios(){
    this.reporteStockUsuarios.forEach((x, i) => {
      this.nombresUsuarios.push(x.Nombres);
      this.categoriaUsuarios.push(x.categoria);
      this.cantidades.push(x.Stock);
    });
    /*
    const conjunto= new Set(this.pProdVenListNombre)
    const sinRepetidos = [...new Set(conjunto)];
    */
    const conjuntoNombres = new Set(this.nombresUsuarios);
    const conjuntoCategorias = new Set(this.categoriaUsuarios);

    const sinRepetidosNombres = [...new Set(conjuntoNombres)];
    const sinRepetidosCategorias = [...new Set(conjuntoCategorias)];
  }

  datos() {
    this.reporteStock.forEach((x, i) => {
      this.nombres.push(x.nombres);
      this.cantidad.push(x.stock_articulos);
    });

    var chart = new Chart("Articulos", {

      type: 'bar',
      data: {
        labels: this.nombres,
        datasets: [{
          label: "Articulos",
          data: this.cantidad,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }],
      },
      options: {
        elements: {
          rectangle: {
            borderWidth: 1,
            borderColor: "rgb(0,255,0)",
            borderSkipped: 'bottom'
          }
        },
        responsive: true,
        title: {
          display: true,
          text: "Stock de articulos"
        }
      }
    })
  }

}
