import { Component, Input } from '@angular/core';
import {  IHousingProds } from '../housing-prod';
// Necesitamos el Router para ir a la pag de detalle y agregarlos a los imports
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="listing" [routerLink]="['/details', housingLocation.id]">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.prenda }} 
     
      </p>
      <p class="listing-location">
          $ {{ housingLocation.price }}
      </p>
    </section>
  `,
  styleUrl: './housing-prods.component.css',
})
export class HousingProdsComponent {
  @Input() housingLocation!: IHousingProds;
}
