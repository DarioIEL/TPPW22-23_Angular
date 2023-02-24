import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:{
    id: number,
    nome: string
  }

  //una volta impostata la nested route deve fare capire a questo component quale id e quale nome viene passato

  //Questa injection serve a leggere cosa andremo a scrivere nello URL
  constructor( private route: ActivatedRoute ){}

  ngOnInit(): void {

    this.user = {
      //il valore dell'ID lo prendo dall'URL
      id: this.route.params['id'], //questo id è identico all'id del path
      nome: this.route.params['nome']

    }

    this.route.params
      .subscribe(
        (params: Params) =>{
          this.user.id = params['id'];
          this.user.nome = params['nome']
        }
      );
  }
}
