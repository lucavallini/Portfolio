import { Component, Input } from '@angular/core';
import { About } from '../../../types/portfolio.types';

@Component({
  selector: 'app-about-section',
  imports: [],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css',
})
export class AboutSection {
  @Input() data!: About;
}
