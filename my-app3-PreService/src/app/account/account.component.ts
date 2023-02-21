import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from '../account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  @Input() mioAccount: Account;
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>()

  onSetStatus(status:string){
    console.log(status);
    this.statusChanged.emit({id: this.id, newStatus: status })
  }

}
