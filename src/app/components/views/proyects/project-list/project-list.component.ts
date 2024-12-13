import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  collapseOpened: boolean = false;
  collapseOpened2: boolean = false;

  toggleCollapse() {
    this.collapseOpened = !this.collapseOpened;
  }

  toggleCollapse2() {
    this.collapseOpened2 = !this.collapseOpened2;
  }

  scrollToProjectsSection() {
    const section = document.getElementById('proyects-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  }
}
