import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../services/portfolio-data.service';

@Component({
  standalone: true,
  selector: 'app-project-links',
  imports: [CommonModule],
  templateUrl: './project-links.component.html',
  styleUrls: ['./project-links.component.css']
})
export class ProjectLinksComponent {
  constructor(public data: PortfolioDataService) {}

  // Flatten projects and nested experience projects into a single list
  get links() {
    const list: Array<{ title: string; company?: string; url?: string }> = [];
    (this.data.projects || []).forEach(p => { if (p.url) list.push({ title: p.title, company: p.company, url: p.url }); });
    (this.data.experiences || []).forEach(e => {
      (e.projects || []).forEach(sp => { if (sp.url) list.push({ title: sp.title, company: e.company, url: sp.url }); });
    });
    return list;
  }
}
