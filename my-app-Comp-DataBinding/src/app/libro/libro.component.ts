import { Component, Input } from '@angular/core';
import { Libro } from '../libro.model';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {

  // @Input("aliasTitoloLibro") titoloLibro: String;

  @Input("aliasLibro") libro: Libro;

}
