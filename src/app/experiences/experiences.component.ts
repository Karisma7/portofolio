import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../services/portfolio-data.service';

@Component({
  standalone: true,
  selector: 'app-experiences',
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {
  expandedItems = new Set<number>();

  constructor(public data: PortfolioDataService) {}

  toggleExpand(index: number) {
    if (this.expandedItems.has(index)) {
      this.expandedItems.delete(index);
    } else {
      this.expandedItems.add(index);
    }
  }

  isExpanded(index: number): boolean {
    return this.expandedItems.has(index);
  }
}
