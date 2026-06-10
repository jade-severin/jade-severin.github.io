import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

export interface WebsiteProject {
  title: string;

  client?: string;

  description: string;

  missions?: string[];

  url: string;

  desktopImage: string;

  tabletImage: string;

  mobileImage: string;

  challenge: {
    question: string;
    answer: string;
  };
}

@Component({
  selector: 'app-website-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './website-showcase.component.html',
  styleUrl: './website-showcase.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebsiteShowcaseComponent {
  @Input({ required: true })
  projects: WebsiteProject[] = [];
}
