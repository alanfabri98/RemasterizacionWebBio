import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Articulo } from "../../models/articulo/articulo";
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

//http://alanfabri-001-site1.ftempurl.com/api/Articulos/Get?criterio=

//http://alanfabri-001-site1.ftempurl.com/api/Articulos/GetL/1020?criterio=Mascarillas
//Lista los articulos ecepto los del usuario enviado

  //url : string = "http://alanfabri-001-site1.ftempurl.com/api/Articulos";
  url : string = "https://localhost:44380/api/Articulos";
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http:HttpClient) { }
//se necesita el id para validar el toquen
  save(a,idUsuario) : Observable<any> {
    a.idUsuario=localStorage.getItem('id');
    console.log(a)
    let alumnoBody = JSON.stringify(a);
    if(a.idArticulo === undefined){
      return this.http.post<any>(this.url+'/Post', alumnoBody, this.httpOptions);
    }

  }
  update(a): Observable<any> {
    return this.http.post<any>(this.url+'/UpDate', a, this.httpOptions);
  }

  listArticulos(criterio:string): Observable<Articulo[]> {//articulos q no son del usuario logueado
    if(localStorage.getItem('token')){
      return this.http.get<Articulo[]>(this.url + "/GetL/"+localStorage.getItem('id')+"?criterio=" + criterio, this.httpOptions)
      .pipe(
        retry(1)
      );
    }else{//si no existe token llamamos a todos
      return this.http.get<Articulo[]>(this.url + "/Get?criterio=" + criterio, this.httpOptions)
      .pipe(
        retry(1)
      );
    }
  }
  
  listArticulosUser(criterio): Observable<Articulo[]>{
    return this.http.post<Articulo[]>(this.url + "/ListId/"+localStorage.getItem('id')+"?criterio=" + criterio, this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  listArticulosIdUser(criterio,id): Observable<Articulo[]>{//cualquier usuario
    return this.http.post<Articulo[]>(this.url + "/ListId/"+id+"?criterio=" + criterio, this.httpOptions)
      .pipe(
        retry(1)
      );
  }
  delete(a: Articulo) : Observable<any> {

    const option={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body:{
        token: localStorage.getItem('token')
      }
    }
    return this.http.delete<any>(this.url + '/Delete/' + a.idArticulo,option);
  }

  retrieve(id:number): Observable<Articulo> {
    return this.http.get<Articulo>(this.url + "/Get/" + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  }
  // esta funcion esta mal
  getArticulos(): Observable<Articulo[]>  {
    //Todo: Poblar Articulos desde una API y retornar una lista
      return this.http.get<Articulo[]>(this.url+'/Get');
  }
  // Parte de Articulos del usuario
  list(id:number,categoria): Observable<Articulo[]> {//este metodo nos falta---------------------------------

    //http://alanfabri-001-site1.ftempurl.com/api/Articulos/ListId/2?criterio=Mascarillas
    return this.http.post<Articulo[]>(this.url + "/ListId/" + id +'?criterio='+categoria, this.httpOptions)
      .pipe(
        retry(1)
      );
  }

}
