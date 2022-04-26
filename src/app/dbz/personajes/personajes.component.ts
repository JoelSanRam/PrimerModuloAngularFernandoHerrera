import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  // @Input() personaje: Personaje[] = []

  get personajes(){
    return this.dbzService.personajes
  }
  constructor(
    public dbzService: ServicesService
  ) {
    // this.personaje = dbzService.personaje
   }

  ngOnInit(): void {
  }

}
