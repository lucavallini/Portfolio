import { Component, Input } from '@angular/core';
import { Title } from '../../../types/portfolio.types';
import { TitleCard } from '../../atoms/title-card/title-card';

@Component({
  selector: 'app-titles-section',
  imports: [TitleCard],
  templateUrl: './titles-section.html',
  styleUrl: './titles-section.css',
})
export class TitlesSection {
  status = ["in progress", "completed"]

  @Input() data!: Title[]

}
