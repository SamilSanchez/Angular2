import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { PlatziComponent }  from './platzi.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ PlatziComponent ],
  bootstrap:    [ PlatziComponent ]
})
export class PlatziModule { }
