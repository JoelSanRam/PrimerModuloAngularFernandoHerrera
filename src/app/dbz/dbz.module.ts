import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ServicesService } from './services/services.service';



@NgModule({
  declarations: [
    MainpageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports: [
    MainpageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ServicesService
  ]
})
export class DbzModule { }
