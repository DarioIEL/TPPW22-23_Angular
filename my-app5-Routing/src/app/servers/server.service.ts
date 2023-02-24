import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  servers = [
    {
      id: 1,
      name: "Produzione",
      status: "online"
    },
    {
      id: 2,
      name: "Passaggio",
      status: "offline"
    },
    {
      id: 3,
      name: "Build",
      status: "online"
    }
  ];

  getServers(){
    return this.servers;
  }


  getServerById(id: number){
    let server = this.servers.find(
      (s) =>{
        return s.id === id;
      }
    )
    return server;
  }

  constructor() { }
}
