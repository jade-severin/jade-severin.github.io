import { Component, computed } from '@angular/core';
import {
  COUV_BTS,
  DOC_PLAQUETTE,
  PLAQUETTES,
  VIDEOS_EQUIPE,
  VIDEOS_PROMO,
  WEBSITES,
} from '../../core/data/data';
import { CalameoContainerComponent } from '../../shared/calameo-container/calameo-container.component';
import { CouvBtsComponent } from '../../shared/couv-bts/couv-bts.component';
import { HeroComponent } from '../../shared/hero/hero.component';
import { MediaGridComponent } from '../../shared/media-grid/media-grid.component';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { SideNavComponent } from '../../shared/side-nav/side-nav.component';
import { TextPromoComponent } from '../../shared/text-promo/text-promo.component';
import { TextEquipeComponent } from '../../shared/text-equipe/text-equipe.component';
import { TextPlaquetteComponent } from '../../shared/text-plaquette/text-plaquette.component';
import { TextPlaquetteRedactionComponent } from '../../shared/text-plaquette-redaction/text-plaquette-redaction.component';
import { WebsiteShowcaseComponent } from '../../shared/website-showcase/website-showcase.component';

@Component({
  standalone: true,

  imports: [
    HeroComponent,
    SectionTitleComponent,
    MediaGridComponent,
    SideNavComponent,
    CouvBtsComponent,
    CalameoContainerComponent,
    TextPromoComponent,
    TextEquipeComponent,
    TextPlaquetteComponent,
    TextPlaquetteRedactionComponent,
    WebsiteShowcaseComponent,
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
  protected websites = WEBSITES;

  protected calameoEmbedUrl = 'https://v.calameo.com/?bkcode=007956311a7ecd2fbe4af';

  private readonly palette = Math.random() > 0.5 ? 'blue' : 'orange';
  protected highlight = computed(() => ({
    color: this.palette === 'blue' ? 'var(--blue)' : 'var(--orange)',
    fontWeight: 'bold',
  }));
}
