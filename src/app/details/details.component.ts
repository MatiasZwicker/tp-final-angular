import { Component, inject } from '@angular/core';
import { IHousingProds } from '../housing-prod';
import { HousingService } from '../housing.service';
import { ActivatedRoute } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HousingProdsComponent } from '../housing-prods/housing-prods.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    @if(!housingProds){
    <p>Loading...</p>
    }@else {

    <article>
      <div class="div">
      <img
        class="listing-photo"
        [src]="housingProds.photo"
        [alt]="housingProds.name"
      />
        </div>
       <article class="article">

         <section class="listing-description">
           <h2 class="listing-heading">{{ housingProds.name }}</h2>
           <p class="listing-location">
             Precio:  $ {{ housingProds.price }}
            </p>
            <p>
              
              </p>
            </section>
            <section class="listing-features">
              <h2 class="section-heading">Informacion</h2>
              <ul class="list-info">
                <li>Unidades restantes:  {{ housingProds.availableUnits }}</li>
                <li>
                  Ropa de entrenamiento:  {{
                    housingProds.entrenamiento ? 'Yes' : 'No'
                  }}
          </li>
          <li>
            Ropa de juego:  {{
              housingProds.partido ? 'Yes' : 'No'
            }}
          </li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading"> Completa con tus datos </h2>
        <form [formGroup]="applyForm" (submit)="handleSubmit()">
          <label for="first-name">Nombre</label>
          <input type="text" id="fist-name" formControlName="firstName" />
          <span class="alert" [hidden]="firstName.valid || firstName.untouched"
          >Ingrese su nombre</span
          >
          <label for="last-name">Apellido</label>
          <input type="text" id="last-name" formControlName="lastName" />
          <span class="alert" [hidden]="lastName.valid || lastName.untouched"
          >Ingrese su apellido</span
          >
          <label for="email">Email</label>
          <input type="text" id="email" formControlName="email" />
          <span class="alert" [hidden]="email.valid || email.untouched">
            @if(email.errors?.['required']){Ingrese su mail} @else{El mail no es valido}
          </span>
          <button type="submit" class="primary" [disabled]="applyForm.invalid">
            Enviar
          </button>
        </form>
      </section>
    </article>
    </article>

    }
  `,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingProds: IHousingProds | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
    ]),
  });
  constructor() {
    const HousingProdsId = Number(this.route.snapshot.params['id']);
    this.housingService
      .getHousingLocationById(HousingProdsId)
      .then((housingProds) => {
        this.housingProds = housingProds;
      });
  }
  get firstName() {
    return this.applyForm.get('firstName') as FormControl;
  }
  get lastName() {
    return this.applyForm.get('lastName') as FormControl;
  }
  get email() {
    return this.applyForm.get('email') as FormControl;
  }

  handleSubmit() {
    if (this.applyForm.invalid) return;
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
    this.applyForm.reset();
  }
  
}
