import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Homesapp | About',
  },
  {
    path: '', component: InicioComponent,  
  }
];
