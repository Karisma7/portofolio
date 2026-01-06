import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../services/portfolio-data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-cv',
  imports: [CommonModule],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  safeCvUrl: SafeResourceUrl | null = null;

  constructor(public data: PortfolioDataService, private sanitizer: DomSanitizer) {
    // Sanitize the PDF URL for iframe usage
    if (this.data && this.data.contact && this.data.contact.cv) {
      this.safeCvUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.contact.cv);
    }
  }
}
