import { Component, Input } from '@angular/core';
import { Project } from '../../../types/portfolio.types';
import { ProjectCard } from '../../atoms/project-card/project-card';

@Component({
  selector: 'app-projects-section',
  imports: [ProjectCard],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css',
})
export class ProjectsSection {
  @Input() data!: Project[]
}
