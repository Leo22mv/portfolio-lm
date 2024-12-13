import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nakama',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nakama.component.html',
  styleUrl: './nakama.component.css'
})
export class NakamaComponent {
  scrollToProjectsSection() {
    const section = document.getElementById('proyects-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  }
}