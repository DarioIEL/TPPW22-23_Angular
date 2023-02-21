import { Component } from '@angular/core';
import { Libro } from './libro.model';
import { Server } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-app-Comp-DataBinding';

  // serversElements = [
  //   {nome: "Server1", descrizione: "server connessione esterna", tipo: "server online"},
  //   {nome: "Server2", descrizione: "server connessione interna", tipo: "server offline"},
  //   {nome: "Server3", descrizione: "server testing", tipo: "server test"}
  // ]

  serversElements: Server[] = [
    new Server("Server1", "server connessione esterna", "server online"),
    new Server("Server2", "server connessione interna", "server offline"),
    new Server("Server3", "server testing", "server test")
  ]

  libri: Libro[] = [
    new Libro("Dune", "Adams", 2),
    new Libro("Guida Galattica", "Adams", 4),
    new Libro("Harry Potter", "Rowling", 1),
    new Libro("Fiori Blu", "Quenoe", 5)
  ]

  titolo: String = "";
  autore: String = "";
  prezzo: Number = 0;

  onInsertNewLibro(){
    this.libri.push(new Libro(this.titolo, this.autore, this.prezzo));
  }

  onAddNewServer(nuovoServer: Server){
    this.serversElements.push(nuovoServer);
  }
}
