import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
 usuario = {
    nombre: 'Ana López',
    correo: 'ana@example.com',
    ubicacion: 'Bogotá, Colombia',
    tipo: 'Administrador',
    fotoUrl: 'https://via.placeholder.com/100',
    web: 'https://www.ejemplo.com',
    email: 'ana@example.com'
  };
}
