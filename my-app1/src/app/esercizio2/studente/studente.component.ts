import { Component } from '@angular/core';
import { Studente } from '../studente.model';

@Component({
  selector: 'app-studente',
  templateUrl: './studente.component.html',
  styleUrls: ['./studente.component.css']
})
export class StudenteComponent {

  studente: Studente = new Studente("Gennarino", "Esposito", 23);

  constructor(){
    // let  studente = new Studente("gennarino", "esposito", 23);
    // console.log(studente);

  }
}
