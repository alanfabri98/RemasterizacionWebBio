import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo/articulo';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';
import { ActivatedRoute } from '@angular/router';
import { faLayerGroup, faTags,faIdBadge, faClipboardList,faMoneyBill, faInfo, faSave } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-articulo-card',
  templateUrl: './articulo-card.component.html',
  styleUrls: ['./articulo-card.component.css']
})
export class ArticuloCardComponent implements OnInit {

  faMoneyBill = faMoneyBill;
  faInfo = faInfo;
  faSave = faSave;
  faClipboardList=faClipboardList;
  faIdBadge=faIdBadge;
  faTags=faTags;
  faLayerGroup=faLayerGroup;

  usuario : User=new User();
  articulo : Articulo =new Articulo();
  articulosUser : Articulo[] = [];
  articuloUser : Articulo = new Articulo();

  constructor(private articuloService: ArticuloService,
              private activatedRoute : ActivatedRoute,
              private usuarioService: UserService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.articuloService.retrieve(params['id']).subscribe(
            result => {
              this.articulo = result;
              this.infoUsuario(this.articulo.idUsuario);
            }
          )
        }
      }
    );
  }

  infoUsuario(id): void{
    this.usuarioService.retrieve(id).subscribe(result => {
      this.usuario = result;
    })
    this.listIdUser('Mascarillas',id);

  }

  listIdUser(criterio,id){
    this.articuloService.list(id,criterio).subscribe(res=>{
      this.articulosUser=res;
    })
    /*this.articulosUser.forEach((x,i)=>{
      console.log(x.categoria +'---' + criterio)
      if(x.categoria===criterio){
        this.articuloUser=x
      }
    })*/
  }



}
