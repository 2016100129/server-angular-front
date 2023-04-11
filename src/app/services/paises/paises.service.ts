import { Injectable } from '@angular/core';
import { Observable } from "rxjs"
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  
  //Prod
  //private API_SERVER = "http://192.168.1.12:8080/apiRest/pais/";

  //Prod Azure
  private API_SERVER = "http://172.173.151.227:8080/apiRest/pais/";

  //dev
  //private API_SERVER = "http://localhost:8080/pais/";
  
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllPaises(): Observable<any> {
    return this.httpClient.get(this.API_SERVER)
  }
}
