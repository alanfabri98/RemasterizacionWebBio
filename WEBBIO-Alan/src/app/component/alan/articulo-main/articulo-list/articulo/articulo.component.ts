import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from 'src/app/models/articulo/articulo';
import { MessengerService } from 'src/app/services/message/messenger.service'

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  @Input() articuloItem: Articulo

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {

  }

  handleAddToCart() {
    this.msg.addTask(this.articuloItem);
  }
}
