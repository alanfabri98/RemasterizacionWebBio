import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Articulo } from 'src/app/models/articulo';
import { NewArticulo } from 'src/app/models/new-articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
declare let alertify:any;

@Component({
  selector: 'app-articulo-tabla',
  templateUrl: './articulo-tabla.component.html',
  styleUrls: ['./articulo-tabla.component.css']
})
export class ArticuloTablaComponent implements OnInit {

  constructor(
    private articuloService: ArticuloService,
    private activatedRoute : ActivatedRoute ) { }

  id_nuevo : number;
  articulos : Articulo[];
  //articulo : Articulo;

  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  @Output() ArticuloToEdit = new EventEmitter<Articulo>();
  @Input() flagToReload;
  @Output() reloadComplete = new EventEmitter<Boolean>();
  //@Input() articulos : Articulo[]=[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          //alert('entra listas')
          this.id_nuevo=params['id'];
          this.listArticulos();
        }
      }
    );

  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.flagToReload.currentValue){
      if(this.flagToReload){
        this.listArticulos();
      }
    }
  }

  listArticulos() : void {
    /*this.articuloService.list(this.id_nuevo).subscribe(
      result => {
        this.articulos = result
        this.reloadComplete.emit(true);
      }
    );*/
  }

  update(a:Articulo) :void {
    this.ArticuloToEdit.emit(a);
  }

  deletee(a:Articulo) :void {
    alertify.confirm('Eliminar articulo',"This is a confirm dialog.",
    ()=>{//asi se ejecuta codigo en alertify
      this.articuloService.delete(a).subscribe(res=>{
        alertify.set('notifier','position', 'top-right');
        alertify.success('A eliminado correctamente');
        this.listArticulos();
      },err=>{
        alertify.set('notifier','position', 'top-right');
        alertify.success('A ocur  rido un error: '+err);
        alertify.success('A ocurrido un error: '+localStorage.getItem('servInterceptor'));
      });

  },
  function(){
    alertify.set('notifier','position', 'top-right');
    alertify.error('A declinado de Eliminar');
  });
  localStorage.removeItem('servInterceptor');
  }//end delete
}
