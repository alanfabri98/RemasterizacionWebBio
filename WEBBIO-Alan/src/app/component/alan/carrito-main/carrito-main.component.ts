import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MessengerService } from 'src/app/services/message/messenger.service'
import { Articulo } from 'src/app/models/articulo/articulo';

@Component({
  selector: 'app-carrito-main',
  templateUrl: './carrito-main.component.html',
  styleUrls: ['./carrito-main.component.css']
})
export class CarritoMainComponent implements OnInit {

  cartItems_ : Articulo[];
  mostrarCarrito : Articulo[];

  cartTotal =0

  constructor( private msg: MessengerService ) { }

  ngOnInit(): void {
    this.listarItems();
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.flagToReload.currentValue){
      
        this.listarItems();
      
    }
  }

  
  listarItems() : void{
    //this.cartItems_= this.msg.getarticulos();
    this.mostrarCarrito= this.msg.getarticulos();
    //let newFormulalist =  this.mostrarCarrito.filter((v,i) => this.mostrarCarrito.findIndex(item => item.idArticulo == v.idArticulo) === i);
    this.cartItems_=this.mostrarCarrito;
  }
  /*
  addArticuloToCart(articulo:Articulo){
    let articuloExiste = false
    
    for (let i in this.cartItems_){
      if(this.cartItems_[i].idArticulo === articulo.idArticulo){
        this.cartItems_[i].qty++
        articuloExiste=true
        break;
      }
    }

    if  (!articuloExiste){
      this.cartItems_.push({
        idArticulo: articulo.idArticulo,
        nombreArticulo: articulo.nombre,
        //imgArticulo: articulo.idImagen
        qty: 1,
        precio: articulo.precio
      })
    }
    
    this.cartItems_.forEach(item => {
      
      this.cartTotal += (item.precio)
    })
  }
  */
}
