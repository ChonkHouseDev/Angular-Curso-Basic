import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[]= ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America']
  heroeborrado: string = '';

  borrarHeroe(){
    
    
    this.heroeborrado = this.heroes.shift() || '';
    
    // this.heroes.length = this.heroes.length - 1
  }

}
