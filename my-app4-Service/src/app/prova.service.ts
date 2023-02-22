import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvaService {

  utenze = [
    {
      nome: "Pippo",
      cognome: "Rossi",
      tipo: "Amm"
    },
    {
      nome: "Paola",
      cognome: "Verdi",
      tipo: "Base"
    },
    {
      nome: "Anna",
      cognome: "Gialli",
      tipo: "Amm"
    }
  ]



  scriviNellaConsole(){
    console.log("Ciao Dal Service");
  }

  scriviNome(nome: string){
    console.log("Ciao " + nome);
  }

  restituisciNome(nome: string): string{
    return nome;
  }

  aggiungiUtente(nome: string, cognome: string, tipo:string){
    this.utenze.push({nome: nome, cognome:cognome, tipo: tipo});
  }

  utente: string = "Anna";

}
