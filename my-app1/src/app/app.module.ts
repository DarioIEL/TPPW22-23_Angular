import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EsercizioComponent } from './esercizio/esercizio.component';
import { Esercizio2Component } from './esercizio2/esercizio2.component';
import { StudenteComponent } from './esercizio2/studente/studente.component';
import { StudentiComponent } from './studenti/studenti.component';
import { ListaStudentiComponent } from './studenti/lista-studenti/lista-studenti.component';
import { DettaglioStudenteComponent } from './studenti/dettaglio-studente/dettaglio-studente.component';
import { StudenteItemComponent } from './studenti/lista-studenti/studente-item/studente-item.component';

@NgModule({
  declarations: [
    AppComponent,
    EsercizioComponent,
    Esercizio2Component,
    StudenteComponent,
    StudentiComponent,
    ListaStudentiComponent,
    DettaglioStudenteComponent,
    StudenteItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
