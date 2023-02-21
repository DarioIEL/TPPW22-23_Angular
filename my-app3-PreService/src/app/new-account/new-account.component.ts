import { Component, EventEmitter, Output } from '@angular/core';
import { Account } from '../account.model';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  @Output() accountAggiunto = new EventEmitter<Account>();


  nomeAccount: string;
  statusAccount: string;

  onCreateNewAccount(){
    this.accountAggiunto.emit(
      new Account(this.nomeAccount, this.statusAccount)
    )
    console.log(this.accountAggiunto);
  }
}
