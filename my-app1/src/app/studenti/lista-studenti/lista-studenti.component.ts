import { Component } from '@angular/core';
import { Studente } from '../studente.model';

@Component({
  selector: 'app-lista-studenti',
  templateUrl: './lista-studenti.component.html',
  styleUrls: ['./lista-studenti.component.css']
})
export class ListaStudentiComponent {

  studenti: Studente[] = [
    new Studente("Pippo", "Rossi", "A001"),
    new Studente("Anna", "Bianchi", "A002"),
    new Studente("Paola", "Verdi", "A003")
   ]



}
