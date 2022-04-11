import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {

    nombre: string = 'ironman';
    edad:number = 54;

    get nombreCap(){
        return this.nombre.toUpperCase();
    }

    obteneNombre():string{
        return `${this.nombre} - ${this.edad}`
    }

    cambiarAlgo(value: string):void{
        if(value == 'nombre'){
            this.nombre = 'Spiderman'
        }else if(value == 'edad'){
            this.edad = 18
        }
    }
}