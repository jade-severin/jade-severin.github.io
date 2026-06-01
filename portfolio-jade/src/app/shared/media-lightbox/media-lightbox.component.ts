import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MediaCardData } from '../media-card/media-card.component';

@Component({
  selector: 'app-media-lightbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-lightbox.component.html',
  styleUrl: './media-lightbox.component.scss',
})
export class MediaLightboxComponent {
  @Input({ required: true })
  media!: MediaCardData;

  @Output()
  close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
