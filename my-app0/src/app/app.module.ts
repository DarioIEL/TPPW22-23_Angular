import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimoComponentComponent } from './primo-component/primo-component.component';
import { SecondoComponent } from './secondo/secondo.component';
import { SecondoBetaComponent } from './secondo/secondo-beta/secondo-beta.component';
import { TerzoComponent } from './terzo/terzo.component';



@NgModule({
  declarations: [
    AppComponent,
    PrimoComponentComponent,
    SecondoComponent,
    SecondoBetaComponent,
    TerzoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
