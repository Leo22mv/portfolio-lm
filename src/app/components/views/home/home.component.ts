import { Component, ElementRef, ViewChild } from '@angular/core';
import { ThreeEngineService } from '../../../services/three-engine.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(private engServ: ThreeEngineService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
  }

  scrollTo(sectionToScroll: string) {
    const section = document.getElementById(sectionToScroll);
    section?.scrollIntoView({ behavior: 'smooth' });
  }
}
