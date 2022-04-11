import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['spiderman', 'batman', 'thor', 'khe']

  borrado:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe(){
    this.borrado = this.heroes.pop() || ''
  }

  AgregarHeroe(){
    this.heroes.push('simon')
  }

}
