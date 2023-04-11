import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  //Prod Azure
  private API_SERVER = "http://172.173.151.227:8080/apiRest/personas/"

  //dev
  //private API_SERVER = "http://localhost:8080/personas/"

  constructor(
    private httpCLient: HttpClient
  ) { }

  public getAllPersonas(): Observable<any> {
    return this.httpCLient.get(this.API_SERVER)
  }

  public savePersona(persona: any): Observable<any> {
    return this.httpCLient.post(this.API_SERVER, persona)
  }

  public deletePersona(id: any): Observable<any> {
    return this.httpCLient.delete(this.API_SERVER + "delete/" + id);
  }

}
