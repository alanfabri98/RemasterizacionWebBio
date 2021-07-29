import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.component.html',
  styleUrls: ['./perfil-user.component.css']
})
export class PerfilUserComponent implements OnInit {


  loadComponentList = false;
  loadComponentForm = false;
  loadComponentCuenta = false;
  @Input() usuario : User=new User();


  constructor(
    private usuarioService: UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('id') !== null || localStorage.getItem('id') !== undefined){
      this.abrirComponente(1);
      this.mostrarUsuario();
    }else{
      // iniciar secion
      this.router.navigate(['/login'])
    }
  }

  abrirComponente(num : number) : void{
    if(num === 1){
      this.loadComponentCuenta=true;
      this.loadComponentForm = false;
      this.loadComponentList = false;
    }if(num === 2){
      this.loadComponentList = true;
      this.loadComponentForm = false;
      this.loadComponentCuenta=false;
    }if(num === 3){
      this.loadComponentForm = true;
    this.loadComponentList = false;
    this.loadComponentCuenta=false;
    }
  }

  mostrarUsuario():void{
    if  (localStorage.getItem('id'))
      this.usuarioService.retrieve(parseInt(localStorage.getItem('id'))).subscribe(
        result =>{
          this.usuario = result
        }
    )
  }

}
