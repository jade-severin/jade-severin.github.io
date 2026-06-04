import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MediaCardData } from '../../core/models/models';

@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss',
})
export class MediaCardComponent {
  @Input({ required: true })
  data!: MediaCardData;

  @Output()
  open = new EventEmitter<void>();

  onOpen(): void {
    this.open.emit();
  }

  isVideo(): boolean {
    return this.data.type === 'video';
  }

  isImage(): boolean {
    return this.data.type === 'image';
  }

  isPdf(): boolean {
    return this.data.type === 'pdf';
  }

  isPortrait(): boolean {
    return this.data.orientation === 'portrait';
  }

  isLandscape(): boolean {
    return this.data.orientation === 'landscape';
  }
}
