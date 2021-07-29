//todo el componente echo por Alan
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Venta } from '../models/venta';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  //todo el componente echo por Alan
  //api/Venta/Post
  //url: string = "http://alanfabri-001-site1.ftempurl.com/api/Venta";
  urlService : string = environment.url + "/Venta";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };
//api/Venta/Post
  constructor(private http: HttpClient) { }

  save(venta: Venta): Observable<any> {
    venta.idUsuario= JSON.parse(localStorage.getItem('id'));
    let ventaBody = JSON.stringify(venta);
    if (venta.idVenta === undefined) {
      return this.http.post<any>(this.urlService + "/Post", ventaBody, this.httpOptions);
    }
    return this.http.put<any>(this.urlService, ventaBody, this.httpOptions);

  }

  idVenta() : Observable<any> {//no usado
    return this.http.get<Venta>(this.urlService + "/GetUltimaVenta?dato=1&edato=2", this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  ventaUsuario():Observable<any>{
    return this.http.get<Venta>(this.urlService+'/GetVentas/'+localStorage.getItem('id'),this.httpOptions).pipe(retry(1))
  }

}
