import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
