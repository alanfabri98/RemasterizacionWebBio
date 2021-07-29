
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-usuario-main',
  templateUrl: './usuario-main.component.html',
  styleUrls: ['./usuario-main.component.css']
})
export class UsuarioMainComponent implements OnInit {

  mainUsuario : User; //Un atributo del componente UsuarioMain que se va a inyectar en
                       //el componente UsuarioForm

  mainTitle : string;
  mainReload : boolean;

  constructor() { }

  ngOnInit(): void {
    this.onInit();
  }

  onInit() : void {
    this.mainUsuario = new User();
    this.mainTitle = "Registro de nuev@ usuario";
    this.mainReload = false;
  }

  toUpdate($event) : void{
    this.mainUsuario = $event;
    //this.mainUsuario.fecha_nacimiento = this.mainUsuario.fecha_nacimiento.replace("T00:00:00","");
    this.mainTitle = "Editando registro de " + $event.nombres + " " + $event.apellidos;
  }

  toReload($event) : void {
    this.onInit();
    this.mainReload = $event;
  }

  reloadDone($event){
    this.mainReload = !$event;
  }

}
