import { Component } from '@angular/core';

@Component({
  selector: 'app-esercizio2',
  templateUrl: './esercizio2.component.html',
  styleUrls: ['./esercizio2.component.css']
})
export class Esercizio2Component {
  nomeStudente:string;

  elencoStudenti: string[] = [];

  onRegistraNomi(event?:any){

    if(event != null){

      if(event.key == "Enter"){
        this.elencoStudenti.push(this.nomeStudente);
        this.nomeStudente = "";
      }
    }else{
      this.elencoStudenti.push(this.nomeStudente);
      this.nomeStudente = "";
    }

  }



}
