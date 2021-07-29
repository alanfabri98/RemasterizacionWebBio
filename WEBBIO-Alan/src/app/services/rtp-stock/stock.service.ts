import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Stock } from 'src/app/models/stock/stock';

@Injectable({
  providedIn: 'root'
})
//http://alanfabri-001-site1.ftempurl.com/api/MasComprados/Get   https://localhost:44380/api/Stock/Get
export class StockService {
  url : string = "http://alanfabri-001-site1.ftempurl.com/api/";
  urlLocal : string = "https://localhost:44380/api/";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http:HttpClient) { }

  list(num): Observable<any[]> {
    return this.http.get<any[]>(this.urlLocal+'Stock/StockUsuarioID/'+num , this.httpOptions)
      .pipe(
        retry(1)
      );
  }
  stockUser():Observable<Stock[]>{
    return this.http.get<Stock[]>(this.url+'StockUsuarios/Get',this.httpOptions)
  }
}
