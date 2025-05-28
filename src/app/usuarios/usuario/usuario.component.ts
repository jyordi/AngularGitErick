import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
   usuarios = [
    { nombre: 'Juan Pérez', correo: 'juanperez@email.com' },
    { nombre: 'María Gómez', correo: 'maria.gomez@email.com' },
    { nombre: 'Carlos Díaz', correo: 'carlos.diaz@email.com' }
  ];

  verUsuario(usuario: any) {
    console.log('Ver:', usuario);
  }

  editarUsuario(usuario: any) {
    console.log('Editar:', usuario);
  }

  eliminarUsuario(usuario: any) {
    console.log('Eliminar:', usuario);
  }

  agregarUsuario() {
    console.log('Agregar nuevo usuario');
  }

}
