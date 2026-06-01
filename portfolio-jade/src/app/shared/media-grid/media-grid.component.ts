import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MediaCardComponent, MediaCardData } from '../media-card/media-card.component';

import { MediaLightboxComponent } from '../media-lightbox/media-lightbox.component';

@Component({
  selector: 'app-media-grid',
  standalone: true,
  imports: [CommonModule, MediaCardComponent, MediaLightboxComponent],
  templateUrl: './media-grid.component.html',
  styleUrl: './media-grid.component.scss',
})
export class MediaGridComponent {
  @Input({ required: true })
  items: MediaCardData[] = [];

  selectedMedia: MediaCardData | null = null;

  open(media: MediaCardData): void {
    this.selectedMedia = media;
  }

  close(): void {
    this.selectedMedia = null;
  }
}
