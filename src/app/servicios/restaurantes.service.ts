import { Injectable } from '@angular/core';
import { Irestaurantes } from './irestaurantes';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {
  restaurante: Irestaurantes ={id:0,
    nombre: '',
    direccion: '',
    descripcion: '',
    imagen: '',
    precio: '',
    categoria: '',
    url: ''};
  restaurantes: Irestaurantes []= [{id:1,
    nombre: 'capri',
    direccion: '25 de mayo',
    descripcion: 'Capri descripcion',
    imagen: 'lo que sea',
    precio: 'bajo',
    categoria: 'Restaurante',
    url: 'www.capri.com.ar'},
    {id:2,
      nombre: 'capri',
      direccion: '25 de mayo',
      descripcion: 'Capri descripcion',
      imagen: 'lo que sea',
      precio: 'bajo',
      categoria: 'Restaurante',
      url: 'www.capri.com.ar'},
      {id:3,
        nombre: 'capri',
        direccion: '25 de mayo',
        descripcion: 'Capri descripcion',
        imagen: 'lo que sea',
        precio: 'bajo',
        categoria: 'Restaurante',
        url: 'www.capri.com.ar'}
  ];
  constructor() { }

  getRestaurantes(){
    return this.restaurantes;
  }

  getRestaurante(id: any){

    return this.restaurantes[id-1];

  }

  agregar(r: Irestaurantes){
    this.restaurantes.push(r);
  }

  modificar(r: Irestaurantes){
    let v = this.restaurantes.findIndex(x => x.id === r.id);
    this.restaurantes[v]=r;
  }

  eliminar(id: number){
    this.restaurantes.splice(id-1,1);
  }
}
