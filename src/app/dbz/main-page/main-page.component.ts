import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-mainpage',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  constructor(){
    
  }
  
}
