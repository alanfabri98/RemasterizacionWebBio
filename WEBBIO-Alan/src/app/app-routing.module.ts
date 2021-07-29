import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router'
import { LoginComponent } from './login-main/login/login.component';
import { LogoutComponent } from './login-main/logout/logout.component';
import { AuthGuard } from './auth.guard';
//import { ProductListClientComponent } from './component/main-client/produc-main-client/product-list-client/product-list-client.component';
import { HomeComponent } from './component/main-client/home/home.component';
import { PerfilUserComponent } from './component/main-user/perfil-user/perfil-user.component';
import { RegisterComponent } from './login-main/register/register.component';
//Alam
import { ArticuloMainComponent } from './component/alan/articulo-main/articulo-main.component';
import { ArticuloCardComponent } from "./component/alan/card-main/articulo-card/articulo-card.component";
//import { ArticuloFormComponent } from './component/alan/articulo-main/articulo-form/articulo-form.component';
import { ArticuloUsuarioComponent } from "./component/alan/articulo-main/articulo-usuario/articulo-usuario.component";
import { UsuarioCardComponent } from "./component/alan/card-main/usuario-card/usuario-card.component";

import { DetalleCarritoComponent } from "./component/alan/carrito-main/detalle-carrito/detalle-carrito.component";
//import { UsuarioMainComponent } from "./component/alan/usuario-main/usuario-main.component";
import { HomeMainComponent } from './component/alan/home-main/home-main.component';
import { AuthService } from './services/auth.service';
import { ArticuloFormComponent } from './component/alan/articulo-main/articulo-form/articulo-form.component';
import { CartListComponent } from './component/main-user/cart-main/cart-list/cart-list.component';
import { EstadisticaMainComponent } from './component/estadistica-main/estadistica-main.component';
//step:1 -> constantre

const routes :Routes=[
  {path: '',redirectTo:'/',pathMatch:'full'},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'logout',component:LogoutComponent,canActivate:[AuthGuard]},

  //VISTA DEL CLIENTE

  {path: '',component:HomeComponent},//INICIO
  {path: 'tienda',component:HomeMainComponent},//categoria
  //vista  del usuario
  {path: 'Miscompras',component:PerfilUserComponent,canActivate:[AuthGuard]},
  {path: 'vender',component:ArticuloFormComponent,canActivate:[AuthGuard]},

  //alan
  {path:  'articulos/:criterio', component:ArticuloMainComponent},
  //{path: 'nuevo_articulo/:id', component: ArticuloFormComponent},
  {path: 'editar_articulo/:id', component: ArticuloUsuarioComponent},
  {path:  'articulos/:criterio/:id',component:ArticuloCardComponent},
  {path: 'usuarios/:id', component: CartListComponent},
  //{path:  'usuarios',component:UsuarioMainComponent},
  {path:  'detalleCart',component:DetalleCarritoComponent},
  {path:  'Reportes',component:EstadisticaMainComponent}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
