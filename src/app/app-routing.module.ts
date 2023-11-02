import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component'
import { LoginComponent } from './componentes/login/login.component'
import { CreacionPacienteComponent } from './componentes/creacion-paciente/creacion-paciente.component'
import { PerfilPacienteComponent } from './componentes/perfil-paciente/perfil-paciente.component'
const routes: Routes = [
  {
    path:'',
    component: InicioComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'registroPaciente',
    component: CreacionPacienteComponent

  },
  {
    path: 'perfil',
    component: PerfilPacienteComponent
  }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
