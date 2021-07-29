
import { Component, OnInit } from '@angular/core';
import {ArticuloService} from 'src/app/services/articulo/articulo.service';
import { Articulo } from 'src/app/models/articulo/articulo';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  articulos_List: Articulo[]=[]//lista de objetos


  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
    //console.log(this.articuloService.getArticulos())
    this.articuloService.getArticulos().subscribe((articulos) =>{
      this.articulos_List = articulos;
    })
  }

}
