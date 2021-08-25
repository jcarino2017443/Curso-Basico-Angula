import { Injectable } from '@angular/core';
import { GLOBAL} from './global.service';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

   obtenerPrueba(): Observable<any>{
      return this._http.get(this.ruta + 'obtenerPruebas', {headers: this.headersVariable})
   }
}
