import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user/user';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  //url : string = "http://alanfabri-001-site1.ftempurl.com/api/Usuarios";
  url : string = "https://localhost:44380/api/Usuarios";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http:HttpClient) { }

  save(a:User) : Observable<any> {
    let usuarioBody = JSON.stringify(a);

    if(a.idUsuario === undefined){
      return this.http.post<any>(this.url+'/Post', usuarioBody, this.httpOptions);
    }
    return this.http.put<any>(this.url+'/Put', usuarioBody, this.httpOptions);
  }

  retrieve(id): Observable<User> {
    return this.http.get<User>(this.url + "/Get/" + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  delete(a: User) : Observable<any> {
    return this.http.delete<any>(this.url + '/Delete/' + a.idUsuario,
      this.httpOptions);
  }

  list(): Observable<User[]> {
    return this.http.get<any[]>(this.url+'/Get', this.httpOptions)
      .pipe(
        retry(1)
      );
  }

}
