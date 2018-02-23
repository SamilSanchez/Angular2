import { Component, Input } from '@angular/core'

@Component({
  selector: 'input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponet {

  // los @Input no reciben ningun dato
  @Input() voto:string

  constructor() {
    console.log('Estoy Entrando')
  }

}
