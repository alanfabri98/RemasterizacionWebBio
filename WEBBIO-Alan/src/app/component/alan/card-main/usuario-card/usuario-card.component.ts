import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { faEye,faSave,faUserPlus,faUnlock,faTimes, faPencilAlt, faTrash, faUser, faIdCard, faCalendar, faMapMarked, faGenderless, faUserAlt, faMapMarkedAlt, faPhone, faAt } from '@fortawesome/free-solid-svg-icons';
import { Articulo } from 'src/app/models/articulo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare let alertify:any;

@Component({
  selector: 'app-usuario-card',
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.css']
})
export class UsuarioCardComponent implements OnInit {

  faSave=faSave;
  faUserPlus=faUserPlus;
  faUnlock=faUnlock;
  faTimes=faTimes;
  faUser = faUser;
  faTrash = faTrash;
  faPencilAlt=faPencilAlt;
  faEye=faEye;
  faIdCard = faIdCard;
  faCalendar = faCalendar;
  faMapMarked = faMapMarked;
  faGenderless = faGenderless;
  faUserAlt = faUserAlt;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faAt = faAt;

  @Input() mainArticulo : Articulo;
  @Input() usuario : User=new User();
  @Input() title : string;
  @Output() flagToReload = new EventEmitter<Boolean>();
  form: FormGroup;
  submitted: boolean = false;

  mainReload : boolean;
  mainTitle : string;

  constructor(
    private usuarioService: UserService,
    private formBuilder: FormBuilder,
    private activatedRoute : ActivatedRoute ) { }

  ngOnInit(): void {

    if(localStorage.getItem('id') !== null || localStorage.getItem('id') !== undefined){
      this.formulario();
      this.usuarioService.retrieve(parseInt(localStorage.getItem('id'))).subscribe(
        result => this.usuario = result
      )
    }

  }//end

  formulario() : void{
    this.form = this.formBuilder.group({
      nombres:                 ['', [Validators.required, Validators.maxLength(50)]],
      apellidos:                 ['', [Validators.required, Validators.maxLength(50)]],
      direccion:                 ['', [Validators.required, Validators.maxLength(100)]],
      telefono:                 ['', [Validators.required, Validators.maxLength(16)]],
      email:                 ['', [Validators.required, Validators.maxLength(100)]],
      contrasena:                 ['', [Validators.required, Validators.maxLength(50)]]
    });
  }//end
  get f(){
    return this.form.controls;
  }

  onSubmit() : void {

    this.submitted = true;

    if(this.form.invalid){
      console.error('Error en formulario');
      return;
    }

    this.usuarioService.save(this.usuario).subscribe(
      result => {
        this.submitted = false;
        console.log(result);
        this.flagToReload.emit(true);
      }
    );
  }

  onReset() : void {
    this.submitted = false;
    this.form.reset();
    this.usuario = new User();
  }

}
