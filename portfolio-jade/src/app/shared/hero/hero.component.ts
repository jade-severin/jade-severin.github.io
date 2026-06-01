import { Component } from '@angular/core';
import { SocialLinksComponent } from '../social-links/social-links.component';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    SocialLinksComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {}