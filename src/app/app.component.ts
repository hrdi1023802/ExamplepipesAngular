import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  nombre = 'Fernando';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.234;
  salario = 12345;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverone',
    edad: 500,
    direccion: {
      calle: 'asdsad',
      casa: 15,
    },
  };
  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('llego la  data'), 3500);
  });

  fecha = new Date();
  nombre2 = 'faniel Israel Hidalgo rueda';
  video = 'DkeiKbqa02g';
  activar: boolean = true;


}
