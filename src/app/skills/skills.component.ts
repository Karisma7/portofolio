import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../services/portfolio-data.service';

@Component({
  standalone: true,
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  constructor(public data: PortfolioDataService) {}

  getTechGroups() {
    const technical = this.data.skills.technical as any;
    return Object.keys(technical).map(groupName => ({
      name: groupName,
      skills: technical[groupName]
    }));
  }
}
