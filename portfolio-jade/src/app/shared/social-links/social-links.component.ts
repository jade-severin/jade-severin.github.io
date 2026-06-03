import { Component } from '@angular/core';

@Component({
  selector: 'app-social-links',
  standalone: true,
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss',
})
export class SocialLinksComponent {
  protected instagramUrl = 'https://www.instagram.com/piano.cktail/';
  protected linkedInUrl = 'https://fr.linkedin.com/in/jade-severin-com-culture';
  protected cvUrl = 'SEVERIN_Jade_CV.pdf';
}
