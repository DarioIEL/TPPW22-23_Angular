import { Component } from '@angular/core';

@Component({
  selector: 'app-esercizio',
  templateUrl: './esercizio.component.html',
  styleUrls: ['./esercizio.component.css']
})
export class EsercizioComponent {

  dettagli: string = "";
  log: string[] = [];

  mostraDettagli() {
    this.dettagli = "Questi sono i dettagli"

    let ora = new Date();

    let singleLog = ora.getHours() + " : " + ora.getMinutes() + " : " + ora.getSeconds();

    this.log.push(singleLog);
  }

  mostraLog(): string[]{
    return this.log;
  }
}
