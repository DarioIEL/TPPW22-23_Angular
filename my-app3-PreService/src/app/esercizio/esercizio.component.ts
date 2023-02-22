import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-esercizio',
  templateUrl: './esercizio.component.html',
  styleUrls: ['./esercizio.component.css']
})
export class EsercizioComponent {

  //nomeUtente: string;
  @Output() nomeUtente = new EventEmitter<string>();

  nomeUtenteScritto:string;

  onEmettiStringa(){

    if(this.nomeUtenteScritto == undefined){

      this.nomeUtente.emit("non hai scritto niente!")
    }else{
      this.nomeUtente.emit(this.nomeUtenteScritto);
    }
  }

}
