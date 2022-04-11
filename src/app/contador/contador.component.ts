import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>
    <button [disabled]="numero == 0" (click)="cambiarValor('menos')">Menos</button>
    <span> {{numero}} </span>
    <button [disabled]="numero == 10" (click)="cambiarValor('mas')">Más</button>
    `
})

export class ContadorComponent {
    title = 'bases';
    numero = 5;
    base:number = 5;
  
    cambiarValor(value:string){
      if(value == 'mas'){
        this.numero += this.base
      }
      if(value == 'menos'){
        this.numero -= this.base
      }
      console.log(this.numero, this.base)
    }
}