import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { User } from 'src/app/models/user';
import { faDollarSign,faUserTag, faHandHoldingUsd,faAt, faMapMarkedAlt,  faEnvelope, faEye, faTrash, faPhone,faLayerGroup, faTags,faIdBadge, faClipboardList,faMoneyBill, faInfo, faSave } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { ArticuloService } from 'src/app/services/articulo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  faHandHoldingUsd=faHandHoldingUsd;
  faAt=faAt;
  faMapMarkedAlt=faMapMarkedAlt;
  faUserTag=faUserTag;
  faEye=faEye;
  faPhone=faPhone;
  faTrash = faTrash;
  faDollarSign=faDollarSign;
  faEnvelope=faEnvelope;
  faMoneyBill = faMoneyBill;
  faInfo = faInfo;
  faSave = faSave;
  faClipboardList=faClipboardList;
  faIdBadge=faIdBadge;
  faTags=faTags;
  faLayerGroup=faLayerGroup;


  usuarioItemList:User=new User();
  articulosUser:Articulo[]=[]
  id_Dueño;

  constructor(
    private articuloServices:ArticuloService,
    private userService:UserService,
    private activateRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(res=>{
      if(res['id']){
        this.id_Dueño=res['id'];
        this.listArticulos('Mascarillas')
        this.userService.retrieve(this.id_Dueño).subscribe(res=>{
          this.usuarioItemList=res;
        })
      }
    })
  }

  listArticulos(criterio){
    this.articuloServices.listArticulosIdUser(criterio,this.id_Dueño).subscribe(res=>{
      this.articulosUser=res;
    })
  }

}
