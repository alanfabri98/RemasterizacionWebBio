import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faUserPlus, faIdCard, faSave, faTimes, faUser, faCalendar, faMapMarkedAlt, faPhone, faAt, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
declare let alertify:any;

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  faUserPlus =faUserPlus;
  faIdCard = faIdCard;
  faSave = faSave;
  faTimes = faTimes;
  faUser = faUser;
  faCalendar = faCalendar;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faAt = faAt;
  faUnlock = faUnlock;

  @Input() usuario : User;
  @Input() title : string;
  @Output() flagToReload = new EventEmitter<Boolean>();

  form: FormGroup;
  submitted: boolean = false;

  constructor(
    private usuarioService: UserService,
    private formBuilder: FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.formUsuario();
    
  }

  formUsuario():void{
    this.form = this.formBuilder.group({
      apellidos:  ['', [Validators.required, Validators.maxLength(50)]],
      nombre:    ['', [Validators.required, Validators.maxLength(50)]],
      direccion:  ['', [Validators.required, Validators.maxLength(100)]],
      telefono:   ['', [Validators.required, Validators.maxLength(16)]],
      email:      ['', [Validators.required, Validators.maxLength(100)]],
      contrasena: ['', [Validators.required, Validators.maxLength(100)]],
    });
    //inicializar form-user
    this.usuario=new User()
  }


  get f(){
    return this.form.controls;
  }

  onSubmit() : void {

    this.submitted = true;
    if(this.form.invalid){
      alertify.set('notifier','position', 'top-right');
      alertify.warning('Error en el formulario');
      return;
    }

    this.usuarioService.save(this.usuario).subscribe(
      result => {
        this.submitted = false;
        alertify.set('notifier','position', 'top-right');
        alertify.warning(result);
        this.router.navigate(['/tienda']);
        this.flagToReload.emit(true);
      },err=>{
        alertify.set('notifier','position', 'top-right');
        alertify.warning('Error: '+err+'-'+localStorage.getItem('servInterceptor'));
      }
    );
  }

  onReset() : void {
    this.submitted = false;
    this.form.reset();
    this.usuario = new User();
    alertify.message('mira como esta este formulario: ' + this.usuario);
    this.flagToReload.emit(true);
  }

}
