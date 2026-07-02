import { Component, Input } from '@angular/core';
import { Technology } from '../../../types/portfolio.types';

@Component({
  selector: 'app-skills-section',
  imports: [],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.css',
})
export class SkillsSection {
  @Input() data!: Technology[]
}
