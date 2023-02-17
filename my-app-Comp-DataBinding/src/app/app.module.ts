import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerComponent } from './server/server.component';
import { LibroComponent } from './libro/libro.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerComponent,
    LibroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
