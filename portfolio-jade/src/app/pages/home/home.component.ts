import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { HeroComponent } from '../../shared/hero/hero.component';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { MediaCardComponent, MediaCardData } from '../../shared/media-card/media-card.component';
import { MediaGridComponent } from '../../shared/media-grid/media-grid.component';
import { DOC_PLAQUETTE, VIDEOS_EQUIPE, VIDEOS_PROMO } from '../../core/data/data';
import { SideNavComponent } from '../../shared/side-nav/side-nav.component';
import { SafeUrlPipe } from '../../shared/pipes/safe-url.pipe';

@Component({
  standalone: true,

  imports: [
    HeroComponent,
    SectionTitleComponent,
    MediaGridComponent,
    SideNavComponent,
    SafeUrlPipe,
  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  videosPromo = VIDEOS_PROMO;
  videosEquipe = VIDEOS_EQUIPE;
  docPlaquette = DOC_PLAQUETTE;

  calameoEmbedUrl = 'https://v.calameo.com/?bkcode=007956311a7ecd2fbe4af';
}
