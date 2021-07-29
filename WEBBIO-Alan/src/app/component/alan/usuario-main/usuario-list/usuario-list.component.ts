import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { faListAlt, faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
//import swal from 'sweetalert2';
declare let alertify:any;
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  faListAlt = faListAlt;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  usuarios : User[];

  @Output() usuarioToEdit = new EventEmitter<User>();
  @Input() flagToReload;
  @Output() reloadComplete = new EventEmitter<Boolean>();

  constructor(private usuarioService:UserService) { }

  ngOnInit(): void {
    this.list();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.flagToReload.currentValue){
      if(this.flagToReload){
        this.list();
      }
    }
  }

  list() : void {
    this.usuarioService.list().subscribe(result => {
      this.usuarios = result;
      this.reloadComplete.emit(true);
    });
  }

  update(a:User) :void {
    //console.log(a);
    this.usuarioToEdit.emit(a);
  }

  delete(a:User) :void {
    alertify.confirm('Eliminar usuario', 'Desea eliminar al Usuario: '+a.nombres+' '+a.apellidos,
    function(){
      this.usuarioService.delete(a).subscribe(result => {this.list();});
      alertify.success('Ok') },
    function(){ alertify.error('Cancel')});
  }

}
