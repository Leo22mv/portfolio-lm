import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectListComponent } from "./project-list/project-list.component";

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [
    RouterModule,
    ProjectListComponent
],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css'
})
export class ProyectsComponent {

}
