import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{

  servers: {
    id: number,
    name: string,
    status: string
  }[] = [];

  constructor(private serverSer: ServerService){
  }

  ngOnInit(): void {
    this.servers = this.serverSer.getServers()
  }

}
