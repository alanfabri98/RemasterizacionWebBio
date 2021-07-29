//Mi stock
import { Component, OnInit } from '@angular/core';

import { StockUsuariosService } from 'src/app/services/rpt/stock-usuarios.service';
import { StockUsuarios } from 'src/app/models/stock-usuarios';
import { Categoria } from 'src/app/models/categoria';
import * as Chart from 'chart.js';


@Component({
  selector: 'app-estadistica-compra',
  templateUrl: './estadistica-compra.component.html',
  styleUrls: ['./estadistica-compra.component.css']
})
export class EstadisticaCompraComponent implements OnInit {

  chart:Chart;
  stockMascarillas:number[]=[]
  stockTrajes:number[]=[]
  stockGuantes:number[]=[]
  stockOtros:number[]=[]
  constructor(
    private stockUsuariosService : StockUsuariosService
    ) { }



  ngOnInit(): void {
    this.listArticulosUsuarios();
  }




  listArticulosUsuarios(): void {
    let Categorias:Categoria[]=[];
    let categ:Categoria=new Categoria();
    categ.categoriaName='Mascarillas';
    categ.stock=0;
    Categorias[0]=categ;
    categ=new Categoria()
    categ.categoriaName='Trajes';
    categ.stock=0;
    Categorias[1]=categ;
    categ=new Categoria()
    categ.categoriaName='Guantes';
    categ.stock=0;
    Categorias[2]=categ;
    categ=new Categoria()
    categ.categoriaName='Otros';
    categ.stock=0;
    Categorias[3]=categ;
    categ=new Categoria()

    let userCategoria:StockUsuarios=new StockUsuarios();
    let datas:StockUsuarios[]=[]

    this.stockUsuariosService.list().subscribe(reportes=>{


      let nombre
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
            userCategoria.Categorias=Categorias;

            //console.log(userCategoria);
            datas[filaNombre]=userCategoria;

            categ.categoriaName='Mascarillas';
            categ.stock=0;
            Categorias[0]=categ;
            categ=new Categoria()
            categ.categoriaName='Trajes';
            categ.stock=0;
            Categorias[1]=categ;
            categ=new Categoria()
            categ.categoriaName='Guantes';
            categ.stock=0;
            Categorias[2]=categ;
            categ=new Categoria()
            categ.categoriaName='Otros';
            categ.stock=0;
            Categorias[3]=categ;
            categ=new Categoria()
            userCategoria=new StockUsuarios();

            filaNombre++
          }

        }
        if(sol.categoria==='Mascarillas'){
          filCategoria=0;
          this.stockMascarillas[filaNombre]=sol.stock
        }
        if(sol.categoria==='Trajes'){
          filCategoria=1;
          this.stockTrajes[filaNombre]=sol.stock
        }
        if(sol.categoria==='Guantes'){
          filCategoria=2;
          this.stockGuantes[filaNombre]=sol.stock
        }if(sol.categoria==='Otros'){
          filCategoria=3;
          this.stockOtros[filaNombre]=sol.stock
        }


          categ.categoriaName=sol.categoria;
          categ.stock=sol.stock;

          Categorias[filCategoria]=categ

          categ=new Categoria();


        if(nombre!==nombre_fijo){
          nombre_fijo=nombre;

          userCategoria.Nombres=nombre_fijo;
          llaveNombre=true;
        }

        if(cont===reportes.length){
          userCategoria.Categorias=Categorias;
          datas[filaNombre]=userCategoria;
        }
        cont++;
      });
      /////ver q tengo
       //////
       console.log()
       let nombresUser:string[]=datas.map(res=>(res.Nombres))
       this.chart=new Chart('Reporte',{
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



    /////////end grafico
    //const stock= datas.map(()=>())
  //end listArticulosUsuarios()


  }
}

