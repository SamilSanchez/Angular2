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
 }
