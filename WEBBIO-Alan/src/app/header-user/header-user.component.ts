import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
declare let alertify:any;
@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {

  constructor(
    private authServices:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  LogOut(){
    alertify.set('notifier','position', 'top-right');//posiscion
    alertify.success('Administrador: Logout exitoso');
    this.authServices.logOut().subscribe(res=>{
      this.router.navigate(['/login']);
    });

  }

}
