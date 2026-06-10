import { AfterViewInit, Component, HostListener } from '@angular/core';

import { CommonModule } from '@angular/common';

interface NavSection {
  id: string;
  label: string;
}

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent implements AfterViewInit {
  sections: NavSection[] = [
    {
      id: 'hero',
      label: 'Contacts',
    },
    {
      id: 'promo',
      label: 'Promotion',
    },
    {
      id: 'equipe',
      label: 'Équipe',
    },
    {
      id: 'plaquette',
      label: 'Plaquette',
    },
    {
      id: 'site',
      label: 'Sites',
    },
  ];

  activeSection = 'hero';

  ngAfterViewInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    if (window.scrollY < 100) {
      this.activeSection = 'hero';
      return;
    }

    const triggerLine = window.innerHeight * 0.35;

    let currentSection = this.sections[0].id;

    for (const section of this.sections) {
      const element = document.getElementById(section.id);

      if (!element) {
        continue;
      }

      const rect = element.getBoundingClientRect();

      if (rect.top <= triggerLine) {
        currentSection = section.id;
      }
    }

    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 20;

    if (nearBottom) {
      currentSection = this.sections[this.sections.length - 1].id;
    }

    this.activeSection = currentSection;
  }

  scrollTo(id: string): void {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    const offset = 80;

    const top = window.scrollY + element.getBoundingClientRect().top - offset;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }
}
