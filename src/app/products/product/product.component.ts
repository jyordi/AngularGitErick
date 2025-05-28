import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productos = [
    {
      nombre: 'Sudadera Oversize',
      descripcion: 'Sudadera unisex con estilo urbano y ajuste relajado. Ideal para un look streetwear.',
      precio: 39.99,
      imagen: 'https://via.placeholder.com/300x200?text=Sudadera+Oversize'
    },
    {
      nombre: 'Joggers Techwear',
      descripcion: 'Joggers con bolsillos utilitarios y tela resistente al agua. Inspiración japonesa moderna.',
      precio: 49.99,
      imagen: 'https://via.placeholder.com/300x200?text=Joggers+Techwear'
    },
    {
      nombre: 'Camiseta Gráfica',
      descripcion: 'Camiseta 100% algodón con estampado exclusivo estilo graffiti. Edición limitada.',
      precio: 29.99,
      imagen: 'https://via.placeholder.com/300x200?text=Camiseta+Gráfica'
    },
    {
      nombre: 'Gorro Beanie',
      descripcion: 'Gorro tejido con parche de marca. Complemento perfecto para el invierno urbano.',
      precio: 14.99,
      imagen: 'https://via.placeholder.com/300x200?text=Gorro+Beanie'
    }
  ];

}
