import { Injectable } from '@angular/core';
import { Articulo } from 'src/app/models/articulo/articulo';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  articulos : Articulo[];
  articuloCarrito : Articulo[];
  carrito : Articulo[];

  indice : number=0;

  constructor(){

  }

  getarticulos() {
    if(localStorage.getItem('articulos') === null) {
      this.articulos = [];
    } else {
      this.articulos = JSON.parse(localStorage.getItem('articulos'));
    }
    return this.articulos;
  }

  agruparArticuloUsuario() : Articulo[]{
    let nuevoObjeto = [];
    nuevoObjeto = JSON.parse(localStorage.getItem('articulos'));
    if(localStorage.getItem('articulos') === null) {
      return this.articulos = [];
    } else {
      nuevoObjeto=  nuevoObjeto.sort(function(a, b) {
        return a.idUsuario-b.idUsuario; /* Modificar si se desea otra propiedad */
      });

      var groups = nuevoObjeto.reduce(function (obj, item) {
        obj[item.idUsuario] = obj[item.idUsuario] || [];
        obj[item.idUsuario].push(
          item.idArticulo,
          item.nombre
          );
        return obj;
      }, {});
      var myArray = Object.keys(groups).map(function (key) {
        return { idUsuario: key, articulo: groups[key] };
      });
      return nuevoObjeto;
    }
    return null;
  }

  borrarDatoRepetido(dato : number):void{
    for (let i = 0; i < this.articulos.length; i++) {
      if (dato === this.articulos[i].idArticulo) {
        this.articulos.splice(this.articulos.length-1, 1);
      }
    }
  }

  noExisteItem() : boolean{
    this.articuloCarrito = JSON.parse(localStorage.getItem('articulos'));
    for (let i = 0; i < this.articuloCarrito.length; i++) {
      if (this.articuloCarrito[i].idArticulo === this.articulos[this.indice - 1].idArticulo) {
        //alert("repetido");
        //var indice = i;
        //alert("este dato esta repetido " + indice);
        this.borrarDatoRepetido(this.articuloCarrito[i].idArticulo);

        return null;
      } else {
        if (i >= this.articuloCarrito.length){
          return false;
        }
      }
    }
    return true;
  }

  addTask(task: Articulo) {
    this.articulos.push(task);
    this.indice = this.articulos.length;
    let articulos = [];
    if(localStorage.getItem('articulos') === null) {
      articulos = [];
      articulos.push(task);
      localStorage.setItem('articulos', JSON.stringify(articulos));
    } else {
      if(this.noExisteItem()){
        articulos = JSON.parse(localStorage.getItem('articulos'));
        articulos.push(task);
        localStorage.setItem('articulos', JSON.stringify(articulos));
      }
    }
    //este array tiene todo los datos
    /*
    this.articulos.filter((v,i) => this.articuloCarrito.findIndex(item => item.idArticulo == v.idArticulo) === i);
    this.articulos.forEach((item, index) => {
      alert("Articulos carrito " + item.nombre);
    });
    */
    //this.articulos =  this.articuloCarrito.filter((v,i) => this.articuloCarrito.findIndex(item => item.idArticulo == v.idArticulo) === i);
    /*
    this.articulos.forEach((item, index) => {
      alert("Articulos" + item.nombre);
    });
    */
  }

  deleteArticulo(task: Articulo) {
    for (let i = 0; i < this.articulos.length; i++) {
      //alert("El task: " + task.nombre);
      //alert("mira array Articulos: " + this.articulos[i].nombre);
      //storage.removeItem(keyName);
      if (task.idArticulo === this.articulos[i].idArticulo) {
        //alert("mira array Articulos: " + this.articulos[i].nombre);
        this.articulos.splice(i, 1);
        localStorage.setItem('articulos', JSON.stringify(this.articulos));
      }
    }
  }

  deleteTask(task: Articulo) {

    for (let i = 0; i < this.articulos.length; i++) {
      //alert("El task: " + task.nombre);
      if (task == this.articulos[i]) {
        //alert("mira array Articulos: " + this.articulos[i].nombre);
        this.articulos.splice(i, 1);
        localStorage.setItem('articulos', JSON.stringify(this.articulos));
      }
    }
  }

}
