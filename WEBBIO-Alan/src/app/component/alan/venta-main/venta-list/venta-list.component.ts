import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/models/venta/venta';
import { Negocio } from 'src/app/models/negocio/negocio';
import { Articulo } from 'src/app/models/articulo/articulo';
import { VentaService } from 'src/app/services/venta/venta.service';

import { MasCompradosService } from 'src/app/services/rtp-mas-comprados/mas-comprados.service';
import { SingleDataSet, Label } from 'ng2-charts';
import * as Chart from 'chart.js';
import { MasComprados } from 'src/app/models/mas-comprados/mas-comprados';
import { Categoria } from 'src/app/models/stock-usuarios/categoria';
import { StockUsuarios } from 'src/app/models/stock-usuarios/stock-usuarios';
import { StockUsuariosService } from 'src/app/services/rtp-stock-usuarios/stock-usuarios.service';

@Component({
  selector: 'app-venta-list',
  templateUrl: './venta-list.component.html',
  styleUrls: ['./venta-list.component.css']
})
export class VentaListComponent implements OnInit {

  chart:Chart;
  chartCantidad_User:Chart;
  stockMascarillas:number[]=[]
  stockTrajes:number[]=[]
  stockGuantes:number[]=[]
  stockOtros:number[]=[]
  ///
  Categorias:Categoria[]=[];
  categ:Categoria=new Categoria();
  ////
  //
  ventasV:Venta[];
  negocioV:Negocio;
  articuloV:Articulo

  ///Alan
  reporteMasComprado : MasComprados[];
  cantidad : SingleDataSet=[];
  nombres : Label[] =[];
  ///////

  constructor(
    private ventaService:VentaService,
    private stockUsuariosService : StockUsuariosService,
    private masCompradosService : MasCompradosService
  ) { }

  ngOnInit(): void {
    this. lisVentas();
    //Alan
    this.list();
    this.listArticulosUsuarios();
  }

  lisVentas(){
    this.ventaService.ventaUsuario().subscribe(sol=>{
      this.ventasV=sol;
    })
  }

  //Alan
  list() : void{
    this.masCompradosService.list(parseInt(localStorage.getItem('id'))).subscribe(res=>{
      this.reporteMasComprado=res;
      this.datos();
    })
  }
/*
this.reporteMasComprado.forEach((x,i)=>{
      this.cantidad.push(x.mas_comprado);
      this.nombres.push(x.nombre);
    });
*/
  datos() {
    this.reporteMasComprado.forEach((x, i) => {
      this.cantidad.push(x.mas_comprado);
      this.nombres.push(x.nombre);
    });

     this.chart = new Chart("Articulos", {

      type: 'line',
      data: {
        labels: this.nombres,
        datasets: [{
          label: "Articulos",
          data: this.cantidad,
          backgroundColor: [
            "#f38b4a"
          ],
          hoverBackgroundColor: [
            "#f38b4a"
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
          text: "Articulos mas comprados"
        }
      }
    })
  }//
  inicializar(){
    this.categ.categoriaName='Mascarillas';
    this.categ.stock=0;
    this.Categorias[0]=this.categ;
    this.categ=new Categoria()
    this.categ.categoriaName='Trajes';
    this.categ.stock=0;
    this.Categorias[1]=this.categ;
    this.categ=new Categoria()
    this.categ.categoriaName='Guantes';
    this.categ.stock=0;
    this.Categorias[2]=this.categ;
    this.categ=new Categoria()
    this.categ.categoriaName='Otros';
    this.categ.stock=0;
    this.Categorias[3]=this.categ;
  }

  listArticulosUsuarios(): void {
    this.inicializar()
    this.categ=new Categoria()

    let userCategoria:StockUsuarios=new StockUsuarios();
    let datas:StockUsuarios[]=[]

    this.stockUsuariosService.listCompraID(localStorage.getItem('id') ).subscribe(reportes=>{


      let nombre=''
      let nombre_fijo=''
      let filaNombre=0
      let filCategoria=3
      let cont=1
      let llaveNombre=false;
      //let i=0;let j=0;let j=0;let l=0;

      reportes.map(sol=>{

        nombre=sol.nombres;

        if(llaveNombre){
          if(sol.nombres!==nombre_fijo){
            //console.log(sol.nombres +'--'+(filaNombre)+'->'+nombre_fijo + ' -> '+cont +' -> '+reportes.length)
            userCategoria.Categorias=this.Categorias;

            //console.log(userCategoria);
            datas[filaNombre]=userCategoria;

            this.inicializar()
            userCategoria=new StockUsuarios();

            filaNombre++
          }

        }
        if(sol.categoria==='Mascarillas'){
          filCategoria=0;
          this.stockMascarillas[filaNombre]=sol.stock_comprado
        }
        if(sol.categoria==='Trajes'){
          filCategoria=1;
          this.stockTrajes[filaNombre]=sol.stock_comprado
        }
        if(sol.categoria==='Guantes'){
          filCategoria=2;
          this.stockGuantes[filaNombre]=sol.stock_comprado
        }
        if(sol.categoria==='Otros'){
          filCategoria=3;
          this.stockOtros[filaNombre]=sol.stock_comprado
        }


          this.categ.categoriaName=sol.categoria;
          this.categ.stock=sol.stock;

          this.Categorias[filCategoria]=this.categ

          this.categ=new Categoria();


        if(nombre!==nombre_fijo){
          nombre_fijo=nombre;

          userCategoria.Nombres=nombre_fijo;
          llaveNombre=true;
        }

        if(cont===reportes.length){
          userCategoria.Categorias=this.Categorias;
          datas[filaNombre]=userCategoria;
        }
        cont++;
      });
      /////ver q tengo
       //////
       console.log(datas)
       console.log('this.stockMascarillas')
       console.log('this.stockTrajes')
       console.log('this.stockGuantes')
       console.log('this.stockOtros')
       let nombresUser:string[]=datas.map(res=>(res.Nombres))
       this.chartCantidad_User=new Chart('Stock-Compras-ID',{
         type:'bar',
         data:{
           labels:nombresUser,
           datasets:[
             {
               label:'Mascarillas',
               data:this.stockMascarillas,
               backgroundColor:
                 'rgba(54, 162, 235)',

               borderColor:
                   'rgba(54, 162, 235, 1)',
             },
             {
               label:'Trajes',
               data:this.stockTrajes,
               backgroundColor:
                 'rgba(255, 206, 86)',
               borderColor:
                   'rgba(255, 206, 86, 1)',
               //fill:false
             },
             {
               label:'Guantes',
               data:this.stockGuantes,
               backgroundColor:
                 'rgba(255, 159, 64)',
               borderColor:
                   'rgba(255, 159, 64,1)',
               //fill:false
             },
             {
               label:'Otros',
               data:this.stockOtros,
               backgroundColor:
                 'rgba(255, 99, 132)',
               borderColor:
                   'rgba(255, 99, 132, 1)',
               //fill:false
             }
           ]
         },
         options: {
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero: true
                   }
               }]
           }
         }
       })

    })
  }//ed listArticulosUsuarios


}
