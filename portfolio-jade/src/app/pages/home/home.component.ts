import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { HeroComponent } from '../../shared/hero/hero.component';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { MediaCardComponent, MediaCardData } from '../../shared/media-card/media-card.component';
import { MediaGridComponent } from '../../shared/media-grid/media-grid.component';
import { MEDIA_ITEMS } from '../../core/data/data';

@Component({
  standalone: true,

  imports: [HeroComponent, SectionTitleComponent, MediaGridComponent],

  templateUrl: './home.component.html',
})
export class HomeComponent {
  mediaItems = MEDIA_ITEMS;
}
