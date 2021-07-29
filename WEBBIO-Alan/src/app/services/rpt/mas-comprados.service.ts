import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MasComprados } from 'src/app/models/mas-comprados';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MasCompradosService {
  url : string = "http://alanfabri-001-site1.ftempurl.com/api/";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http:HttpClient) { }

  list(num:number): Observable<any[]> {
    return this.http.get<any[]>(this.url + "MasComprados/GetCompradosCategorias/" + num, this.httpOptions)
      .pipe(
        retry(1)
      );
  }
}
