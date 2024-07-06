import { Component, inject } from '@angular/core';
import { HousingProdsComponent } from '../housing-prods/housing-prods.component';
import { IHousingProds } from '../housing-prod';
import { HousingService } from '../housing.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingProdsComponent, RouterModule],
  template: `
    <section class="buscar">
      <form>
        <input type="search" placeholder="Buscar" #filter />
        <button
          type="button"
          class="primary "
          (click)="filterResults(filter.value)"
        >
      Filtrar
        </button>
        <button [routerLink]="['/inicio']"> Tienda </button>
      </form>
    </section>
    <section class="results">
      @if(!housingProdsList.length){
      <span>Loading...</span>
      } @for(house of filteredProdsList; track house.id ){

      <app-housing-location [housingLocation]="house" />
      }
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingProdsList: IHousingProds[] = [];
  housingService: HousingService = inject(HousingService);
  filteredProdsList: IHousingProds[] = [];
  constructor() {
    this.housingService
      .getAllHousingLocation()
      .then((housingProdsList: IHousingProds[]) => {
        this.housingProdsList = housingProdsList;
        this.filteredProdsList = housingProdsList;
      });
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredProdsList = this.housingProdsList;
    }
    this.filteredProdsList = this.housingProdsList.filter((house) =>
      house?.prenda.toLowerCase().includes(text.toLowerCase())
    );
  }
}
