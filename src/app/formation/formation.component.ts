import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../services/portfolio-data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-formation',
  imports: [CommonModule],
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent {
  private visibleDiplomas = new Set<number>();

  constructor(public data: PortfolioDataService, private sanitizer: DomSanitizer) {}

  toggleDiploma(index: number) {
    if (this.visibleDiplomas.has(index)) {
      this.visibleDiplomas.delete(index);
    } else {
      this.visibleDiplomas.add(index);
    }
  }

  isDiplomaVisible(index: number): boolean {
    return this.visibleDiplomas.has(index);
  }

  getSafeDiplomaUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
