import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Utente } from './utente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'my-app6-HTTP';

  constructor(private datiSer: DataService){}

  utenti: Utente[];

  ngOnInit(): void {
    this.datiSer.getData() //qui ricevo un Observable, quindi lo devo Osservare, consumare
        .subscribe((utentiJSON: Utente[]) =>{
          console.log("Nel Consumer", utentiJSON);
          this.utenti = utentiJSON;
        })
  }

  meStesso: Utente = {
    nome: "Dario",
    role: "Base"
  }


  onPostData(){
    this.datiSer.postaData(this.meStesso)
        .subscribe(response =>{
          console.log(response);
          this.ngOnInit(); //attenzione l'id deve incrementare, quindi per averlo auto devo cambiare il model
        })
  }

}
