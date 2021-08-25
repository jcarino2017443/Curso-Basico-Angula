import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositorioService {
  baseUrl: String = "https://api.github.com"
  username: String = "codigofacilito"

  constructor(private http: HttpClient) {
    
   }

  getResponse(){
    return  this.http.get(this.baseUrl + '/users/' + this.username + "/repos")
  }
}
