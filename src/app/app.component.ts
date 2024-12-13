import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/views/home/home.component";
import { ProyectsComponent } from "./components/views/proyects/proyects.component";
import { AboutMeComponent } from "./components/views/about-me/about-me.component";
import { ContactComponent } from "./components/views/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    ProyectsComponent,
    AboutMeComponent,
    ContactComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-lm';
}
