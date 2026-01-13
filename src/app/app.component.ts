import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from './services/portfolio-data.service';
import { ProfileComponent } from './profile/profile.component';
import { FormationComponent } from './formation/formation.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectLinksComponent } from './project-links/project-links.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReferencesComponent } from './references/references.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { CvComponent } from './cv/cv.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, ProfileComponent, FormationComponent, SkillsComponent, ExperiencesComponent, ProjectsComponent, ProjectLinksComponent, GalleryComponent, ReferencesComponent, ContributionsComponent, CvComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuOpen = false;
  imageLoaded = false;
  profilePhotoSrc = '';

  constructor(public data: PortfolioDataService) {
    this.profilePhotoSrc = this.data.contact?.photo || 'assets/logos/pp.jpeg';
  }

  get initials(): string {
    const name = this.data?.name || '';
    return name.split(' ').map(n => (n && n.length ? n[0] : '')).join('');
  }
  selectedCategory = 'about';

  selectCategory(cat: string) {
    this.selectedCategory = cat;
    // Fermer le menu après sélection sur mobile
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onImageLoad() {
    this.imageLoaded = true;
  }

  onImageError() {
    this.imageLoaded = false;
  }
}
