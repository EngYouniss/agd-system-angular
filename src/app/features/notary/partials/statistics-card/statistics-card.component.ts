import { Component, ViewEncapsulation } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-statistics-card',
  standalone: true,
  imports: [CardModule],
  templateUrl: './statistics-card.component.html',
  styleUrl: './statistics-card.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class StatisticsCardComponent {

}
