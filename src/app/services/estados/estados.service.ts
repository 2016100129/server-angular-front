import { Injectable } from '@angular/core';
import { Observable } from "rxjs"
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  //Prod
  //private API_SERVER = "http://192.168.1.12:8080/apiRest/estados/"

  //Prod Azure
  private API_SERVER = "http://172.173.151.227:8080/apiRest/estados/"

  //Dev
  //private API_SERVER = "http://localhost:8080/estados/"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getallListadoByPais(idPais:any): Observable<any> {
    return this.httpClient.get(this.API_SERVER + idPais)
  }
}
