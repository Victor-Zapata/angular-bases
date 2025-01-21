// import { Component } from "@angular/core";

// //llamo al decorador que marca que esto será un componente
// //y tengo que detallar el template
// @Component({
//   //el selector marca como quiero usar este componente en el html
//   selector: 'app-counter',

//   template: '<h1>Hola Counter</h1>',
//   standalone: false,
// })
// export class CounterComponent {

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  //aca deberia trabajar la parte del html, porque literalmente eso
  template: `
      <button (click)="addNumber(1)">Sumar número</button>
      <button (click)="lessNumber(1)">Restar número</button>
      <button (click)="resetCounter(19)">Resetear</button>
      <h3>Counter es: {{counter}}</h3>
      <p>Congratulations! Your app is running. 🎉</p>
  `,
  standalone: false,
})

export class CounterComponent {

  public counter: number = 19

  //hago el metodo con el que incrementaré el counter
  addNumber = (value: number): void => {
    this.counter = this.counter + value
  }

  lessNumber = (value: number): void => {
    this.counter = this.counter - value
  }

  resetCounter = (value: number): void => {
    this.counter = 19
  }
}
