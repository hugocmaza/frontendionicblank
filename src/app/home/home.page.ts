import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Irestaurantes } from '../servicios/irestaurantes';
import { RestaurantesService } from '../servicios/restaurantes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  restaurantes: Irestaurantes[] ;
  constructor(private router: Router, private srestaurante: RestaurantesService) {
    this.restaurantes = this.srestaurante.getRestaurantes();
  }


  editar(id: number){
    this.router.navigate(['/restaurante/'+ id]);
  }

  eliminar(id: number){
    this.srestaurante.eliminar(id);
  }

}
