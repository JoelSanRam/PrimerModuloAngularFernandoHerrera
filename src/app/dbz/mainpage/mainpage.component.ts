import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  // personaje: Personaje[]=[]

  nuevo: Personaje = {
    nombre: "simin",
    poder: 0
  }
/* 
  get personajes():Personaje[]{
    return this.dbzService.personaje
  } */

  constructor(
    // public dbzService: ServicesService
  ) {
    // this.personaje = dbzService.personaje
   }

  ngOnInit(): void {
  }

/*   agregarNuevoPersonaje(persona: Personaje){
    console.log(persona)
    this.personaje.push(persona)
  } */

}
