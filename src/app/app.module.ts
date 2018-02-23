import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { PlatziComponent }  from './platzi/platzi.component';
import { InputComponet }  from './input/input.component';
import { HeroeDetailsComponent } from './heroe/heroe-detail.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroeDetailsComponent,
    InputComponet,
    PlatziComponent,
  ],
  bootstrap:    [
    AppComponent,
    PlatziComponent
  ]
})
export class AppModule { }
