import { Component, EventEmitter, Output } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  // @Output() serverCreato = new EventEmitter<{nome: String, cognome: String, numTel: Number}>();
  // @Output() serverCreato = new EventEmitter<String>();
  // @Output() serverCreato = new EventEmitter<Number>();
  @Output() serverCreato = new EventEmitter<Server>();


  nomeServer: String = "";
  descrizioneServer: String = "";
  tipoServer: String = "";

  onAddServer(){
    console.log(this.nomeServer, this.descrizioneServer, this.tipoServer);

    let newServer = new Server(this.nomeServer, this.descrizioneServer, this.tipoServer);
    this.serverCreato.emit(newServer);
  }

}
