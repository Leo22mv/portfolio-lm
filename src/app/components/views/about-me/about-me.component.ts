import { Component } from '@angular/core';
import { ServicesComponent } from "./services/services.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    ServicesComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
