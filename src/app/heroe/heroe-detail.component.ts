import { Component, Input } from '@angular/core'
import { Hero } from './Hero'

@Component({
  selector: 'heroe-detalle',
  template: `
  <div *ngIf="heroe">
    <h2>{{heroe.nombre}} details!</h2>
    <div><label>id: </label>{{heroe.id}}</div>
    <div>
      <label>nombre: </label>
      <input [(ngModel)]="heroe.nombre" placeholder="nombre"/>
    </div>
  </div>
  `
})
export class HeroeDetailsComponent {
  // prueba:Array<Hero> = [
  //   {
  //     id: 1,
  //     nombre: 'Samil'
  //   }
  // ];


  @Input() heroe:Object

  constructor(){

  }

}
