import { Component, OnInit } from '@angular/core';


//servicios
import{ ServicioService} from 'src/app/services/servicio.service'

//Modelo
import {usuario} from 'src/app/modelos/usuario'

@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.css']
})
export class PerfilPacienteComponent implements OnInit{
  nombrePaciente: any;
  correoPaciente: any;

  constructor(private service: ServicioService){}

  ngOnInit(): void {
    this.service.getPaciente().subscribe(data=>{
      console.log(data)
      this.nombrePaciente = data.nombre
      this.correoPaciente = data.correo
    })
  }
  
 

}
