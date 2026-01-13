import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../services/portfolio-data.service';

@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(public data: PortfolioDataService) {}

  // Return projects sorted by period (most recent first).
  // Period strings are expected in formats like 'MM/YYYY' or 'MM/YYYY – MM/YYYY' or descriptive text.
  get sortedProjects() {
    const arr = (this.data.projects || []).slice();
    const parseYear = (p: any) => {
      if (!p || !p.period) return 0;
      // Try to extract the last 4-digit year in the period string
      const m = p.period.match(/(20\d{2}|19\d{2})/g);
      if (m && m.length) return parseInt(m[m.length - 1], 10);
      return 0;
    };
    arr.sort((a, b) => parseYear(b) - parseYear(a));
    return arr;
  }
}
