import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private _personaje:Personaje[]=[
    {
      nombre: 'khe',
      poder: 494
    },
    {
      nombre: 'noc',
      poder: 9494
    },
    {
      nombre: 'sic',
      poder: 595
    }
  ]

  get personajes():Personaje[]{
    return[...this._personaje]
  }

  constructor() { }

  agregarPersonaje(personaje: Personaje){
    this._personaje.push(personaje)
  }
}
