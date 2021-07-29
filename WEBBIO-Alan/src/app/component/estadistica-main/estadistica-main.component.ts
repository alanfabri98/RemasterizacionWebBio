import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estadistica-main',
  templateUrl: './estadistica-main.component.html',
  styleUrls: ['./estadistica-main.component.css']
})
export class EstadisticaMainComponent implements OnInit {

  loadComponentList = false;
  loadComponentForm = false;
  loadComponentCuenta = false;
  @Input() usuario : User=new User();


  constructor(
    private usuarioService: UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.mostrarEstadistica();
    
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
    }
  }

  mostrarEstadistica():void{
    
  }

}