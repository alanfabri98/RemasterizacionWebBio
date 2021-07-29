import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockUsuariosService {
  url : string = "http://alanfabri-001-site1.ftempurl.com/api";
  urlLocal : string = "https://localhost:44380/api/Stock";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http:HttpClient) { }

  list(): Observable<any[]> {
    return this.http.get<any[]>(this.url+'/StockUsuarios/Get', this.httpOptions)
      .pipe(
        retry(1)
      );
  }
  listID(id): Observable<any[]> {
    return this.http.get<any[]>(this.urlLocal+'/StockUsuario/'+id, this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  listCompra():Observable<any[]>{
    return this.http.get<any[]>(this.url+'/MasComprados/Get',this.httpOptions).pipe(
      retry(1)
    );
  }

  listCompraID(id):Observable<any[]>{//Venta de articulos
    return this.http.get<any[]>(this.urlLocal+'/CompraCategoria/'+id,this.httpOptions).pipe(
      retry(1)
    );
  }



  list_Compras_():Observable<any[]>{//Compra de articulos
    return this.http.get<any[]>(this.urlLocal+'/StockCompra/',this.httpOptions).pipe(
      retry(1)
    );
  }

  list_Compras_Cantidad():Observable<any[]>{//https://localhost:44380/api/Stock/CompraCategoria
    return this.http.get<any[]>(this.urlLocal+'/GetTotalCompra/',this.httpOptions).pipe(
      retry(1)
    );
  }







  ListCantidad(){
    return  this.http.get<any[]>(this.urlLocal,this.httpOptions)
  }
  ListCantidad_ID (id){
    return  this.http.get<any[]>(this.urlLocal,this.httpOptions)
  }
}
