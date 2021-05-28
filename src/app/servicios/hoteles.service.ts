import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import {GLOBAL} from './global.service'
import {Hoteles} from '../modelos/HotelesModelo'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class HotelesService {
  public ruta!: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json')
  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

   obtenerHotel(token:any): Observable<any> {
     let headersToken = this.headersVariable.set('Authorization', token)
     return this._http.get(this.ruta + 'obtenerHoteles', {headers: headersToken});
   }

   obtenerHotelId(id:String): Observable<any>{
     return this._http.get(this.ruta + 'obtenerHotelID/' + id, {headers: this.headersVariable});

   }

   agregarHotel(hotel: Hoteles, token:any){
    let params = JSON.stringify(hotel);
    let headersToken = this.headersVariable.set('Authorization', token)
    return this._http.post(this.ruta + 'agregarHotel', params, {headers: headersToken});
   }

   eliminarHotel(id:String, token:any): Observable<any>{
     let headersToken = this.headersVariable.set('Authorization', token);
     return this._http.delete(this.ruta + 'eliminarHotel/' + id, {headers: headersToken});
   }

   editarHotel(hotel: Hoteles, token:any): Observable<any>{
     let params = JSON.stringify(hotel);
     let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(this.ruta + 'editarHotel/' + hotel._id, params, {headers: headersToken})

   }
}
