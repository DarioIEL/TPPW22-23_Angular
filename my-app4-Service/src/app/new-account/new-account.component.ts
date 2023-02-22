import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  nomeAccount: string;
  statusAccount: string;

  //Dependency Injection
  constructor(private accSer: AccountService){

  }

  onAggiungiAccount(){
    this.accSer.aggiungiAccount(this.nomeAccount, this.statusAccount);
  }

}
