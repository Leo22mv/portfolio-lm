import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  scrollToContactSection() {
    const section = document.getElementById('contact-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  }
}
