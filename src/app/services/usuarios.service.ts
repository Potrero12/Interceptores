import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { }

  obtenerUsuarios(){

    let params = new HttpParams().append('page', '2');
    params = params.append('nombre', 'Julian Perdomo');


    return this.http.get(`https://reqr123es.in/api/user`, {
      params
    }).pipe(
      map( (resp:any) => resp['data'])
      
    );
  }
}
