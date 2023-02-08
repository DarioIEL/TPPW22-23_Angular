import { Component } from '@angular/core';

//decorator
@Component({
  selector: 'app-root', //definisce il tag html da richiamare in una pagina
  templateUrl: './app.component.html', //c'è tutto lo HTML del nostro component
  styleUrls: ['./app.component.css'] //c'è il Css della pagina
})

//AppComponent è il nome della classe. Il component è una classe
export class AppComponent {
  //proprietà di classe
   title = 'Prima App di Angular';
  //  author = "Dario";
  author = {
    nome: "Dario",
    cognome: "Mennillo",
    materia: "Angular",
    presenza: true
  }

}
