import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../services/portfolio-data.service';

@Component({
  standalone: true,
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(public data: PortfolioDataService) {}

  get initials(): string {
    const name = this.data?.name || '';
    return name.split(' ').map(n => (n && n.length ? n[0] : '')).join('');
  }
  imageLoaded = false;

  photoSrc = '';

  onImageLoad() {
    this.imageLoaded = true;
  }

  onImageError() {
    this.imageLoaded = false;
    this.photoSrc = 'assets/avatar-placeholder.png';
  }

  // initialize photoSrc from the service value (or fallback)
  ngOnInit(): void {
    this.photoSrc = (this.data && this.data.contact && this.data.contact.photo) ? this.data.contact.photo : 'assets/avatar-placeholder.png';
  }
}
