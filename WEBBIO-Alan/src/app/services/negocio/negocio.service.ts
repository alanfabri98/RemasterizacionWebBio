//todo el componente echo por Alan
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Negocio } from '../../models/negocio/negocio';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {
//todo el componente echo por Alan
  //url : string = "http://alanfabri-001-site1.ftempurl.com/api/Negocios";
  url : string = "https://localhost:44380/api/Negocios";
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http:HttpClient) { }
//api/Negocios/Post
  save(negocio:Negocio) : Observable<any> {
    let negocioBody = JSON.stringify(negocio);
    if(negocio.idNegocio === undefined){
      return this.http.post<any>(this.url + "/Post", negocioBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, negocioBody, this.httpOptions);

  }

}
