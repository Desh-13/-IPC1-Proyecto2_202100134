import { Component } from '@angular/core';

//servicios
import{ ServicioService} from 'src/app/services/servicio.service'

//Modelo
import {usuario} from 'src/app/modelos/usuario'

@Component({
  selector: 'app-creacion-paciente',
  templateUrl: './creacion-paciente.component.html',
  styleUrls: ['./creacion-paciente.component.css']
})
export class CreacionPacienteComponent {

  nombre: any;
  correo: any;
  password: any;
  usuario: usuario = new usuario();
constructor(private service: ServicioService){

}
  enviarDatos(){

    this.usuario.nombre = this.nombre
    this.usuario.correo = this.correo
    this.usuario.password = this.password

    console.log(this.usuario)

    this.service.postPaciente(this.usuario).subscribe(data =>{
      console.log(data)
    },err =>{
      console.log(err)
    })

  }
}
