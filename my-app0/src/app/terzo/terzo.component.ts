import { Component } from '@angular/core';

@Component({
  selector: 'app-terzo',
  templateUrl: './terzo.component.html',
  styleUrls: ['./terzo.component.css']
})
export class TerzoComponent {

  allowClick = false;
  statusServer = "Nessun server creato";
  nomeServer = "";
  serverCreated = false;

  servers = ["pippoServer", "ServerANient", "ServerServer"];

  constructor(){
    setTimeout(()=>{
      this.allowClick = true
    }, 10000);

    for (const server of this.servers) {
        console.log(server);

    }
  }

  onCreateNewServer(){
    this.serverCreated = true;
    this.nomeServer = "ServerAppenaCreato";
    this.servers.push(this.nomeServer);
    this.statusServer = "Hai creato un nuovo Server";
  }

}
