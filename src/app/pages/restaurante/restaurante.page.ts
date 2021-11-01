import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Irestaurantes } from 'src/app/servicios/irestaurantes';
import { RestaurantesService } from 'src/app/servicios/restaurantes.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
})
export class RestaurantePage implements OnInit {
  accion: string ;
  ultimo: number;
  restaurante: Irestaurantes = {id:0,
    nombre: '',
    direccion: '',
    descripcion: '',
    imagen: '',
    precio: '',
    categoria: '',
    url: ''};
  constructor(private activate: ActivatedRoute , private srestaurante: RestaurantesService,private router: Router) { }

  ngOnInit() {
    if(this.activate.snapshot.params.id>=0){
      const id = this.activate.snapshot.params.id;
      this.getRestaurante(id);
      this.accion = 'modificar';
    }else{
      this.accion = 'agregar';
      this.ultimo = this.srestaurante.getRestaurantes().length+1;
      this.restaurante = {id:this.ultimo,
        nombre: '',
        direccion: '',
        descripcion: '',
        imagen: '',
        precio: '',
        categoria: '',
        url: ''};
    }


  }

  getRestaurante(id: number){
    this.restaurante = this.srestaurante.getRestaurante(id);
    console.log(this.restaurante);
  }

  grabar(){
    console.log('-----------------------'+this.accion);
    if(this.accion==='agregar'){
      console.log('agregar');
      this.srestaurante.agregar(this.restaurante);

    }else{
      console.log('modificar');
      this.srestaurante.modificar(this.restaurante);

    }
    this.router.navigate(['/home/']);
  }

}
