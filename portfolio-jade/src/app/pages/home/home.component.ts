import { Component } from '@angular/core';
import {
  COUV_BTS,
  DOC_PLAQUETTE,
  PLAQUETTES,
  VIDEOS_EQUIPE,
  VIDEOS_PROMO,
} from '../../core/data/data';
import { CalameoContainerComponent } from '../../shared/calameo-container/calameo-container.component';
import { CouvBtsComponent } from '../../shared/couv-bts/couv-bts.component';
import { HeroComponent } from '../../shared/hero/hero.component';
import { MediaGridComponent } from '../../shared/media-grid/media-grid.component';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { SideNavComponent } from '../../shared/side-nav/side-nav.component';

@Component({
  standalone: true,

  imports: [
    HeroComponent,
    SectionTitleComponent,
    MediaGridComponent,
    SideNavComponent,
    CouvBtsComponent,
    CalameoContainerComponent,
  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected videosPromo = VIDEOS_PROMO;
  protected videosEquipe = VIDEOS_EQUIPE;
  protected docPlaquette = DOC_PLAQUETTE;
  protected campaignVisuals = COUV_BTS;
  protected plaquettes = PLAQUETTES;

  protected calameoEmbedUrl = 'https://v.calameo.com/?bkcode=007956311a7ecd2fbe4af';
}
