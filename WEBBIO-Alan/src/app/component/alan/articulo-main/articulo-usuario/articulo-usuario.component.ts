import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from 'src/app/models/articulo/articulo';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faBiohazard, faMoneyBill, faInfo, faSave, faTimes, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-articulo-usuario',
  templateUrl: './articulo-usuario.component.html',
  styleUrls: ['./articulo-usuario.component.css']
})
export class ArticuloUsuarioComponent implements OnInit {

  //articulo : Articulo;
  
  faBiohazard =faBiohazard;
  faMoneyBill = faMoneyBill;
  faInfo = faInfo;
  faSave = faSave;
  faUserPlus = faUserPlus;
  faTimes = faTimes;

  @Input() articulo : Articulo=new Articulo();
  id_nuevo : number;

  form: FormGroup;
  submitted: boolean = false;

  constructor( private articuloService: ArticuloService, 
              private formBuilder: FormBuilder,
              private activatedRoute : ActivatedRoute,
              private router: Router ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){      
          this.id_nuevo=params['id'];           
          this.articuloService.retrieve(params['id']).subscribe(
            result => this.articulo = result
          )          
        }
      }
    );
    //console.log("Mira este objeto: " + this.articulo);
    this.articulo.idUsuario=this.id_nuevo;
    this.formArticulo();
    //console.log("Nuevo dato" + this.id_nuevo);
  }

  formArticulo():void{
    this.form = this.formBuilder.group({      
      precio:  [''],
      nombre:    ['', [Validators.required, Validators.maxLength(100)]],
      categoria:  ['', [Validators.required]],
      detalle:   ['', [Validators.required, Validators.maxLength(5000)]],
      estado:      ['', [Validators.required, Validators.maxLength(12)]],
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

    this.articuloService.save(this.articulo,this.id_nuevo).subscribe(
      result => {
        this.submitted = false;
        this.router.navigate(['usuarios']);

      }
    );
  }

  onReset() : void {
    this.submitted = false;
    this.form.reset();
    this.articulo = new Articulo();
  }
}
