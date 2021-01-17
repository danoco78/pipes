import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = 'Capitan America'
  nombre2: string = 'cApItAn aMeRiCa'
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI
  porcentaje1: number = 0.544;
  porcentaje2: number = 0.545;
  salario: number = 1234.5;
  fecha: Date = new Date;
  idioma: string = 'es';
  videoUrl: string = "https://www.youtube.com/embed/5MFO_q2SUWo";
  activar: boolean = true;

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });

  heroe = {
    nombre: "logan",
    clave: "Wolverine",
    edad: 125,
    direccion: {
      calle: "calle 61 # 2gn-114",
      apto: "301b",
      unidad: "Santa Angela"
    }
  }

}
