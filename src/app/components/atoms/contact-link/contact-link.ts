import { Component, Input } from '@angular/core';
import { Contact } from '../../../types/portfolio.types';

@Component({
  selector: 'app-contact-link',
  imports: [],
  templateUrl: './contact-link.html',
  styleUrl: './contact-link.css',
})
export class ContactLink {
  @Input() data!:Contact
  copyMail(){
    navigator.clipboard.writeText(this.data.url)
  }
}
