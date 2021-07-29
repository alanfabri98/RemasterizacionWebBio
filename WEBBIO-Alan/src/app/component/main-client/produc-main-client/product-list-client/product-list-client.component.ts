import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-product-list-client',
  templateUrl: './product-list-client.component.html',
  styleUrls: ['./product-list-client.component.css']
})
export class ProductListClientComponent implements OnInit {
  //propiedad
  articulos_list:Articulo[]=[];


  constructor(
    private articuloServices:ArticuloService
  ) { }

  ngOnInit(): void {
    this.articuloServices.getArticulos().subscribe(articulos=>{
      this.articulos_list=articulos;
    })
  }

}
