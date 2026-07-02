import { Component, Input } from '@angular/core';
import { Title } from '../../../types/portfolio.types';

@Component({
  selector: 'app-title-card',
  imports: [],
  templateUrl: './title-card.html',
  styleUrl: './title-card.css',
})
export class TitleCard {
  @Input() data!: Title

  get statusClass(): string {
    return this.data.status.toLowerCase().replace(/\s+/g, '-');
  }
}
