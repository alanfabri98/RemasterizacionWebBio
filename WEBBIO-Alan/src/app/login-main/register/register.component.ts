import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faUserPlus, faIdCard, faSave, faTimes, faUser, faCalendar, faMapMarkedAlt, faPhone, faAt, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from "../../services/user/user.service";
import { User } from "../../models/user/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formUsuario();
  }

  formUsuario():void{
    this.form = this.formBuilder.group({
      nombres:    ['', [Validators.required, Validators.maxLength(50)]],
      apellidos:  ['', [Validators.required, Validators.maxLength(50)]],
      direccion:  ['', [Validators.required, Validators.maxLength(100)]],
      telefono:   ['', [Validators.required, Validators.maxLength(16)]],
      email:      ['', [Validators.required, Validators.maxLength(100)]],
      contrasena: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }


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

    this.flagToReload.emit(true);
  }

}
