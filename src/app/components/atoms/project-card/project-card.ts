import { Component, Input } from '@angular/core';
import { Project } from '../../../types/portfolio.types';
import { TechBadge } from "../tech-badge/tech-badge";

@Component({
  selector: 'app-project-card',
  imports: [TechBadge],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() data!: Project
}
