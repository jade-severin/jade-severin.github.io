import { AfterViewInit, Component } from '@angular/core';

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

  activeSection = 'promo';

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      {
        threshold: 0.35,
      },
    );

    this.sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) {
        observer.observe(element);
      }
    });
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
