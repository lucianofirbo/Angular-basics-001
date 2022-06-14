import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes: string[] = ['Batman', 'Flash', 'Wonder Woman', 'Green Lantern'];
  heroeBorrado: string = '';

  borrarHeroes() {
    console.log('Borrando...');
    this.heroeBorrado = this.heroes.pop() || '';
  }
  
}

