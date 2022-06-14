import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `

<h1>{{ title }}</h1>

<button (click)="acumular(+1)"> +1 </button>

<span> {{ numero }} </span>

<button (click)="acumular(-1)"> -1 </button>

<h3>La base es: <strong><span>{{base}}</span></strong></h3>
<button (click)="acumular5()">+5</button> <button (click)="restar5()">-5</button>



    `
})

export class ContadorComponent {
    title:string = 'Contador App';
  numero: number = 10;

  acumular(valor:number) {
    this.numero += valor;
  }

  base: number = 5;

  acumular5() {
    this.base += 5;
  }

  restar5() {
    this.base -= 5;
  }
}