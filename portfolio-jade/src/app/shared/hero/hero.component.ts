import { Component, HostListener, inject } from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { SocialLinksComponent } from '../social-links/social-links.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  imports: [SocialLinksComponent],
})
export class HeroComponent {
  private document = inject(DOCUMENT);
  private isAnimating = false;

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent): void {
    if (this.isAnimating) return;

    const isInHero = window.scrollY < window.innerHeight * 0.6;
    if (!isInHero) return;

    if (event.deltaY <= 0) return;

    const anchor = this.document.getElementById('projects-anchor');
    if (!anchor) return;

    event.preventDefault();

    this.isAnimating = true;

    anchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    setTimeout(() => {
      this.isAnimating = false;
    }, 900);
  }

  scrollToProjects(): void {
    const anchor = this.document.getElementById('projects-anchor');
    if (!anchor) return;

    anchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
