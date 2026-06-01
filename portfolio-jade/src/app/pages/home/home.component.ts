import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { HeroComponent } from '../../shared/hero/hero.component';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { MediaCardComponent, MediaCardData } from '../../shared/media-card/media-card.component';
import { MediaGridComponent } from '../../shared/media-grid/media-grid.component';

@Component({
  standalone: true,

  imports: [HeroComponent, SectionTitleComponent, MediaGridComponent],

  templateUrl: './home.component.html',
})
export class HomeComponent {
  mediaItems: MediaCardData[] = [
    {
      type: 'video',
      title: 'Répétition théâtre',
      description: 'Exploration du corps et du silence',
      src: 'assets/videos/theatre1.mp4',
      tags: ['théâtre', 'performance'],
    },

    {
      type: 'image',
      title: 'Festival culturel',
      src: 'assets/images/festival.jpg',
      tags: ['festival', 'culture'],
    },

    {
      type: 'pdf',
      title: 'Dossier de presse',
      src: 'assets/pdf/dossier.pdf',
      tags: ['presse'],
    },
  ];
}
