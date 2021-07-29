import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {

  mainUsuario : User; //Un atributo del componente AlumnoMain que se va a inyectar en
                       //el componente AlumnoForm
  mainTitle : string;
  mainReload : boolean;

  listArticulo : Articulo[];

  constructor(
    private articuloService:ArticuloService
  ) { }

  ngOnInit(): void {
    this.onInit();
    this.obtener_localstorage();
    this.articuloService.listArticulos('Mascarillas').subscribe(res=>{
      this.listArticulo=res;
    })
    //Eliminar de local storage
    localStorage.removeItem("usuario");
  }

  onInit() : void {
    this.mainUsuario = new User();
    this.mainTitle = "Registro de nuev@ alumno";
    this.mainReload = false;
  }

  toReload($event) : void {
    this.onInit();
    this.mainReload = $event;
  }

  // local storage
  obtener_localstorage(){
    let nombre = localStorage.getItem("nombre");
    let persona = JSON.parse( localStorage.getItem("persona") );

  }

  grabar_localstorage() {
    let nombre: string = "Alan";

    let persona = {
      nombre: "Juan",
      edad: 18,
      coords: {
        lat: 10,
        lng: -10
      }
    }
    localStorage.setItem('nombre', nombre);
    localStorage.setItem("persona", JSON.stringify(persona));
    //localStorage.setItem("persona", persona);
  }

  listArticulos(criterio){
    this.articuloService.listArticulos(criterio).subscribe(res=>{
      this.listArticulo=res;
    })
  }

}
