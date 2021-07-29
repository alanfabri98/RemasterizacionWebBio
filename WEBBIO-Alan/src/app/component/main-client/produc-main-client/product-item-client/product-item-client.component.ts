import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';

@Component({
  selector: 'app-product-item-client',
  templateUrl: './product-item-client.component.html',
  styleUrls: ['./product-item-client.component.css']
})
export class ProductItemClientComponent implements OnInit {
  //
  @Input() articuloItem:Articulo;


  constructor() { }

  ngOnInit(): void {
  }

}
