import { Component, OnInit } from '@angular/core';
import { ProvaService } from './prova.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app4-Service';

  utenti: object[] = [];

  //voglio utilizzare il metodo del prova.service qui in app Comp
  //1.creare un costruttore per iniettare la dipendenza
  constructor(private servizioProva: ProvaService){
      servizioProva.scriviNellaConsole(); //metodi del service
      servizioProva.scriviNome("Dario");
      console.log( servizioProva.utente ); //prop del service

      servizioProva.scriviNome(servizioProva.utente);

      //quewto sotto funziona solo se la strict è false
      //this.utenti = this.servizioProva.utenze;
  }

  // per avere il metodo onInit devo implementare l'interfaccia sulla classe e fare l'import in alto
  ngOnInit(): void {
    this.utenti = this.servizioProva.utenze;
  }

  onAggiungiUtente(){
    this.servizioProva.aggiungiUtente("Paperino", "De Paperoni", "Admin");
  }

  saluto: string;
  onScrivi(){
    this.servizioProva.scriviNome("Laura");
    this.saluto = "Ciao " + this.servizioProva.restituisciNome("Laura");
  }


}
