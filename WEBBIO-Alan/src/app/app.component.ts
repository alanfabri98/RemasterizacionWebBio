import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import * as AOS from "aos";//importar AOS animacion
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public autServices:AuthService){}
  title = 'WEBBIO-V2';
  ngOnInit(){
    AOS.init()
  }

}
