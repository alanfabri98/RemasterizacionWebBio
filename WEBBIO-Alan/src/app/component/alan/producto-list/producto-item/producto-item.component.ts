import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from 'src/app/models/articulo/articulo';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';
@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {

  @Input() articuloItem:Articulo;

  constructor(
    private articuloServices:ArticuloService
    ) { }

  ngOnInit(): void { }


}
