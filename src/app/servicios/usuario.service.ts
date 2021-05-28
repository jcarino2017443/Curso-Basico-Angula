import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Usuario } from '../modelos/usuarioModelo';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public ruta: String;
  public token: any;
  public identidad: any;
  public localStorag: any= localStorage.getItem('identidad');
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
      
  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url
   }

    registro(usuario: Usuario): Observable<any>{
      let params = JSON.stringify(usuario)
      return this._http.post(this.ruta + 'registrar', params, {headers: this.headersVariable})
    }

    obtenerUsuarios(): Observable<any>{
      return this._http.get(this.ruta + 'obtenerUsuarios', {headers: this.headersVariable});
    }

    login(usuario: any, getToken:any): Observable<any>{
      if(getToken != null){
        usuario.getToken = getToken;
      }
      let params = JSON.stringify(usuario);
      return this._http.post(this.ruta + 'login', params, {headers: this.headersVariable});
    }

    editarUSuario(usuario:Usuario): Observable<any>{
      let params = JSON.stringify(usuario);
      let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

      return this._http.put(this.ruta + 'editarUsuarioAdmin/' + usuario._id, params, {headers: headersToken});
    }

    eliminarUsuario(id: String): Observable<any> {
      let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());
      return this._http.delete(this.ruta + 'eliminarUsuarios/' + id, {headers: headersToken});
    }

    obtenerUsuarioId(id: String): Observable<any>{
      return this._http.get(this.ruta + 'obtenerUsuarioId/' + id, {headers: this.headersVariable});

    }

    obtenerIdentidad(){
      var identidad2 = JSON.parse(this.localStorag);
      if(identidad2 != 'undefined'){
        this.identidad = identidad2;
      }else{
        this.identidad = null;
      }
      return this.identidad;

    }
    obtenerToken(){
      var token2 = localStorage.getItem('token')
      if(token2 != 'undefined'){
        this.token = token2;
      }else{
        this.token = null;
      }

      return this.token;

    }
}
