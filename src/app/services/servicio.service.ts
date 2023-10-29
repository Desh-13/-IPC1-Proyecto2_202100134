import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }
  private urlBackend = "http://localhost:8000";

  postPaciente(user: any){
  console.log( `${this.urlBackend}/registroPaciente`)
  const options = {responseType: 'text' as 'json'}
  return this.http.post(`${this.urlBackend}/registroPaciente`,user,options)
  
  }
}
