import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './header/slider/slider.component';
import { LoginComponent } from './login-main/login/login.component';
import { LogoutComponent } from './login-main/logout/logout.component';
import { AppRoutingModule } from './app-routing.module';
import { ProducUserComponent } from './component/main-user/product-main/produc-user/produc-user.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthGuard } from "./auth.guard";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { InterceptorInterceptor } from "./interceptor.interceptor";
import { CartItemComponent } from './component/main-user/cart-main/cart-item/cart-item.component';
import { ProductUserListComponent } from './component/main-user/product-main/product-user-list/product-user-list.component';
import { ProductUserFormComponent } from './component/main-user/product-main/product-user-form/product-user-form.component';
import { CartListComponent } from './component/main-user/cart-main/cart-list/cart-list.component';
import { CartFormComponent } from './component/main-user/cart-main/cart-form/cart-form.component';
import { ProductItemClientComponent } from './component/main-client/produc-main-client/product-item-client/product-item-client.component';
import { ProductListClientComponent } from './component/main-client/produc-main-client/product-list-client/product-list-client.component';
import { ProductFormClientComponent } from './component/main-client/produc-main-client/product-form-client/product-form-client.component';
import { PerfilUserComponent } from './component/main-user/perfil-user/perfil-user.component';
import { HomeComponent } from './component/main-client/home/home.component';
import { RegisterComponent } from './login-main/register/register.component';
import { SexdescPipe } from './shared/sexdesc.pipe'
//Alan
import { ArticuloComponent } from "./component/alan/articulo-main/articulo-list/articulo/articulo.component";
import { ArticuloListComponent } from "./component/alan/articulo-main/articulo-list/articulo-list.component";
import { ArticuloFormComponent } from "./component/alan/articulo-main/articulo-form/articulo-form.component";
import { ArticuloTablaComponent } from "./component/alan/articulo-main/articulo-tabla/articulo-tabla.component";
import { ArticuloCardComponent } from './component/alan/card-main/articulo-card/articulo-card.component';
import { ArticuloCarritoComponent } from "./component/alan/carrito-main/articulo-carrito/articulo-carrito.component";
import { UsuarioCardComponent } from './component/alan/card-main/usuario-card/usuario-card.component';
import { UsuarioMainComponent } from './component/alan/usuario-main/usuario-main.component';
import { ArticuloUsuarioComponent } from './component/alan/articulo-main/articulo-usuario/articulo-usuario.component';
import { ArticuloMainComponent } from './component/alan/articulo-main/articulo-main.component';
import { DetalleCarritoComponent } from './component/alan/carrito-main/detalle-carrito/detalle-carrito.component';
import { CarritoMainComponent } from "./component/alan/carrito-main/carrito-main.component";
import { UserService } from './services/user/user.service';
import { ServicesInterceptor } from "./services/services.interceptor";
import { ProductoItemComponent } from "./component/alan/producto-list/producto-item/producto-item.component";
import { ProductoListComponent } from "./component/alan/producto-list/producto-list.component";
import { FormEditComponent } from './component/alan/usuario-main/form-edit/form-edit.component';
import { UsuarioListComponent } from "./component/alan/usuario-main/usuario-list/usuario-list.component";
import { UsuarioFormComponent } from "./component/alan/usuario-main/usuario-form/usuario-form.component";
import { HomeMainComponent } from "./component/alan/home-main/home-main.component";
import { VentaFormComponent } from "./component/alan/venta-main/venta-form/venta-form.component";
import { NegocioFormComponent } from "./component/alan/negocio-main/negocio-form/negocio-form.component";
import { NegocioListComponent } from "./component/alan/negocio-main/negocio-list/negocio-list.component";
import { VentaListComponent } from "./component/alan/venta-main/venta-list/venta-list.component";
import { EstadisticaMainComponent } from "./component/estadistica-main/estadistica-main.component";
import { EstadisticaCompraComponent } from "./component/estadistica-main/estadistica-compra/estadistica-compra.component";
import { EstadisticaStockComponent } from "./component/estadistica-main/estadistica-stock/estadistica-stock.component";
//login social
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';

import { ScrollingModule } from "@angular/cdk/scrolling";
import { ModalComponent } from './header/modal/modal.component';
import { VentaService } from './services/venta/venta.service';
import { VentaCantidadComponent } from './component/estadistica-main/estadistica-stock/Estadistica/venta-cantidad/venta-cantidad.component';
import { VentaStockComponent } from './component/estadistica-main/estadistica-stock/venta-stock/venta-stock.component';
import { CompraComponent } from './component/estadistica-main/estadistica-stock/compra/compra.component';
import { CanvasComponent } from './component/estadistica-main/estadistica-stock/canvas/canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    LoginComponent,
    LogoutComponent,
    ProducUserComponent,
    HeaderUserComponent,
    CartItemComponent,
    ProductUserListComponent,
    ProductUserFormComponent,
    CartListComponent,
    CartFormComponent,
    ProductItemClientComponent,
    ProductListClientComponent,
    ProductFormClientComponent,
    PerfilUserComponent,
    HomeComponent,
    RegisterComponent,
    SexdescPipe,
    //Alan
    ArticuloComponent,
    ArticuloListComponent,
    ArticuloFormComponent,
    ArticuloTablaComponent,

    NegocioFormComponent,
    VentaListComponent,
    NegocioListComponent,
    VentaFormComponent,
    VentaFormComponent,
    HomeMainComponent,
    ArticuloCardComponent,
    UsuarioCardComponent,
    UsuarioMainComponent,
    UsuarioFormComponent,
    UsuarioListComponent,
    ArticuloUsuarioComponent,
    FormEditComponent,
    ProductoListComponent,
    ProductoItemComponent,
    CarritoMainComponent,
    ArticuloMainComponent,
    ArticuloCarritoComponent,
    DetalleCarritoComponent,
    ModalComponent,
    EstadisticaMainComponent,
    EstadisticaCompraComponent,
    EstadisticaStockComponent,
    VentaCantidadComponent,
    VentaStockComponent,
    CompraComponent,
    CanvasComponent

  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    //social
    SocialLoginModule,
    //scroll
    ScrollingModule,
    ChartsModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('398428956597-ev9r607bcauh1hvgfqpdvihahkd5v00q.apps.googleusercontent.com'),
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('239523637339943'),
        }/*,
        {
          id: AmazonLoginProvider.PROVIDER_ID,
          provider: new AmazonLoginProvider('clientId'),
        },*/
      ],
    } as SocialAuthServiceConfig,
  },
  VentaService,{
    provide: HTTP_INTERCEPTORS,
    useClass: ServicesInterceptor,
    multi: true
  },
    UserService,{
      provide: HTTP_INTERCEPTORS,
      useClass: ServicesInterceptor,
      multi: true
    },
    AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:InterceptorInterceptor,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
