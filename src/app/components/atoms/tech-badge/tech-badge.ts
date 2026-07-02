import { Component, Input } from '@angular/core';
import { ProjectTechnology, Technology } from '../../../types/portfolio.types';

@Component({
  selector: 'app-tech-badge',
  imports: [],
  templateUrl: './tech-badge.html',
  styleUrl: './tech-badge.css',
})
export class TechBadge {
  @Input() data!:Technology | ProjectTechnology;
}
