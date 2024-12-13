import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-moe',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './moe.component.html',
  styleUrl: './moe.component.css'
})
export class MoeComponent {
  scrollToProjectsSection() {
    const section = document.getElementById('proyects-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  }
}
