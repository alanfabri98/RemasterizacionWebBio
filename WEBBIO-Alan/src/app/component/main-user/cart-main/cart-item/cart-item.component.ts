import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo/articulo';
import { MessengerService } from 'src/app/services/message/messenger.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() articuloItem: Articulo
  constructor(
    private sms:MessengerService
  ) { }

  ngOnInit(): void {
  }
  handleAddToCart() {
    this.sms.addTask(this.articuloItem);
  }
}
