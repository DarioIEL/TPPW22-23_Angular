import { Component } from '@angular/core';

@Component({
  selector: 'app-primo-component',
  templateUrl: './primo-component.component.html',
  styleUrls: ['./primo-component.component.css']
})
export class PrimoComponentComponent {
  id: number = 0;
  nome: string = "Primo per Primo";
  status = "Online"; //il tipo può anche essere omesso e verrà calcolato byInference

  constructor(){
    //operatore ternario
    let numero: number = Math.random();
    this.status = numero > 0.5 ? "Online" : "Offline"; 

    // if(numero > 0.5){
    //   this.status = "Online"
    // }else{
    //   this.status= "Offline"
    // }

    console.log(this.status);
    console.log(numero);
  }

  getColore(){
    return this.status == "Online" ? "green" : "red";
  }

  getStatus(){
    return this.status;
  }

}
