import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent  {
  name = 'Angular';

  eventoClick():void {
    console.log("Hola estoy escuchando")
    this.name = this.name.toUpperCase()
  }

  votos = [
    {
      id:1,
      nombre: 'opcion 1'
    },
    {
      id:2,
      nombre: 'opcion 2'
    },
    {
      id:3,
      nombre: 'opcion 3'
    },
    {
      id:4,
      nombre: 'opcion 4'
    },
    {
      id:5,
      nombre: 'opcion 5'
    }
  ]

  heroes = [
    {
      id:1,
      nombre: 'Samil'
    },
    {
      id:2,
      nombre: 'Juana'
    },
    {
      id:3,
      nombre: 'Maria'
    },
    {
      id:4,
      nombre: 'Pedro'
    },
    {
      id:5,
      nombre: 'Miguel'
    }
  ]

 }
