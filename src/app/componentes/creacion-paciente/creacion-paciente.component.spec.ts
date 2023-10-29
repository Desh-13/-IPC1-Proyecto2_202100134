import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionPacienteComponent } from './creacion-paciente.component';

describe('CreacionPacienteComponent', () => {
  let component: CreacionPacienteComponent;
  let fixture: ComponentFixture<CreacionPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreacionPacienteComponent]
    });
    fixture = TestBed.createComponent(CreacionPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
