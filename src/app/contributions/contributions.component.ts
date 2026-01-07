import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../services/portfolio-data.service';

@Component({
  standalone: true,
  selector: 'app-contributions',
  imports: [CommonModule],
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.css']
})
export class ContributionsComponent {
  constructor(public data: PortfolioDataService) {}
}
