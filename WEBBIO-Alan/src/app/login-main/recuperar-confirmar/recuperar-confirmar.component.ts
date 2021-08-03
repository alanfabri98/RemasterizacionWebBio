import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faUserPlus, faIdCard, faSave, faTimes, faUser, faCalendar, faMapMarkedAlt, faPhone, faAt, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
declare let alertify:any;

@Component({
  selector: 'app-recuperar-confirmar',
  templateUrl: './recuperar-confirmar.component.html',
  styleUrls: ['./recuperar-confirmar.component.css']
})
export class RecuperarConfirmarComponent implements OnInit {

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
  @Input() email : string;

  usuarioCambio : User;
  band : boolean;

  form: FormGroup;
  submitted: boolean = false;

  textobody : string;

  constructor(private usuarioService: UserService,
    private formBuilder: FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.formUsuario();
    this.textobody = "Ingrese el codigo";
          this.band = false;
  }

  formUsuario():void{
    this.form = this.formBuilder.group({
      email:      ['', [Validators.required, Validators.maxLength(100)]],
      contrasena: ['', [Validators.required, Validators.maxLength(100)]],
    });
    //inicializar form-user
    this.usuario=new User()
    this.usuario.email = this.email;
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

    if(!localStorage.getItem('usuarioCambio')){
      this.usuarioService.confirmar(this.usuario).subscribe(
        result => {
          this.submitted = false;
          alertify.set('notifier','position', 'top-right');
          alertify.warning(result);
  
          if(result.tipoImgLogin === ""){
            this.textobody = "Ingrese su nueva contraseña";
            this.band = true;
            this.usuarioCambio = result;
            localStorage.setItem('usuarioCambio', JSON.stringify(this.usuarioCambio));
          }else{
            this.textobody = "Ingrese el codigo";
            this.band = false;
          }
  
        },err=>{
          alertify.set('notifier','position', 'top-right');
          alertify.warning('Error: '+err+'-'+localStorage.getItem('servInterceptor'));
        }
      );
    }else{
      var v = localStorage.getItem('usuarioCambio');
      this.usuarioCambio = JSON.parse(v);
      this.usuarioService.save(this.usuarioCambio).subscribe(result =>{
        alertify.set('notifier','position', 'top-right');
          alertify.warning("exitoso");
      },err=>{
        alertify.set('notifier','position', 'top-right');
        alertify.warning('Error: '+err+'-'+localStorage.getItem('servInterceptor'));
      });
    }
    
  }

  onReset() : void {
    this.submitted = false;
    this.form.reset();
    this.usuario = new User();
    alertify.message('mira como esta este formulario: ' + this.usuario);
  }

}
