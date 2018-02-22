import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { PlatziComponent }  from '../platzi/platzi.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PlatziComponent],
  bootstrap:    [ AppComponent, PlatziComponent]
})
export class AppModule { }
