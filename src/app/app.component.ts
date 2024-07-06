import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent],
  template: `
    <main>
      <header class="brand-mame">
        <img
          class="brand-logo"
          class="logo-afa"
          src="/imagenes/logo.png"
          alt="logo"
          aria-hidden="true"
          routerLink="/"
        />
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
      <footer >
      <img
          class="brand-logo"
          class="logo-afa"
          src="/imagenes/logo.png"
          alt="logo"
          aria-hidden="true"
          routerLink="/"
        />
      </footer>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {}
