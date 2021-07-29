import { Component, OnInit, SimpleChanges, Input  } from '@angular/core';
import { Articulo } from 'src/app/models/articulo/articulo';
import { faListAlt, faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';
import { ActivatedRoute } from '@angular/router';
declare let alertify: any

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.css']
})
export class ArticuloListComponent implements OnInit {

  articulos : Articulo[];
  @Input() flagToReload;

  constructor(private articuloService:ArticuloService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.listArticulo();
  }

  faListAlt = faListAlt;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  ngOnChanges(changes: SimpleChanges) {
    if(changes.flagToReload.currentValue){
      if(this.flagToReload){
        this.listArticulo();
      }
    }
  }

  delete(a:Articulo) :void {
    alertify.set('nitifire','position','top-right');
    alertify.confirm("Desea eliminar el regitro de "+a.nombre,
    function(){
      this.articuloService.delete(a).subscribe(res =>console.log(res))
      alertify.success('Ok');
    },
    function(){
      alertify.error('Cancel');
    });
  }//end Delete

  listArticulo(): void{
    this.activatedRoute.params.subscribe(
      params => {
        if(params['criterio']){
          this.articuloService.listArticulos(params['criterio']).subscribe(
            result => this.articulos = result
          )
        }
      }
    );
  }
}
