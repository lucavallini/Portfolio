import { Component, Input } from '@angular/core';
import { Hero } from '../../../types/portfolio.types'
import { ContactLink } from "../../atoms/contact-link/contact-link";

@Component({
  selector: 'app-hero',
  imports: [ContactLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent {
  @Input() data!: Hero
}
