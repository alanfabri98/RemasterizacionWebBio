import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { SocialAuthService, SocialUser } from "angularx-social-login";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  //
  user={
    nombre:'',
    img:'../assets/imagen/denniss.jpg'
  }

  user2: SocialUser;
  loggedIn: boolean;
  faShoppingCart=faShoppingCart;
  constructor(
    private authService: SocialAuthService,
    public authServices:AuthService
  ) { }

  ngOnInit(): void {
    this.user.nombre=localStorage.getItem('name');
    this.authService.authState.subscribe((user) => {
      this.user2 = user;
      this.loggedIn = (user != null);
    })

  }

  verificar(){
    if(this.authServices.logIn()){
      this.user.nombre=localStorage.getItem('name');
      if(localStorage.getItem('imgP')){
        this.user.img=localStorage.getItem('imgP');
      }
      return true;
    }
  }
  signOut(): void {
    this.authService.signOut();

  }
  logOut(){
    this.authServices.logOut().subscribe(res=>{
    localStorage.removeItem('id');
    console.log(res);
      this.user.nombre='';
    })
  }

}
