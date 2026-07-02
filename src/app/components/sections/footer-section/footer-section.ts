import { Component, Input } from '@angular/core';
import { ContactLink } from '../../atoms/contact-link/contact-link';
import { Contact } from '../../../types/portfolio.types';

@Component({
  selector: 'app-footer-section',
  imports: [ContactLink],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.css',
})
export class FooterSection {
  @Input() data!:Contact[];
}
