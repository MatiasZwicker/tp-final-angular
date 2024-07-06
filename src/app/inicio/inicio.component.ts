import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule],
  template: `
  

    <h1>
      Bienvenidos a la tienda oficial de la Selección Argentina
    </h1>
    <img   [routerLink]="['inicio']" src="/imagenes/banner.julian.webp" alt="">
    <section class="container" >
<button [routerLink]="['inicio']"> Ir a la Tienda</button>
  </section>

  `,
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
