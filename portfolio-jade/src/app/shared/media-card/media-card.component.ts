import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';

export type MediaType = 'video' | 'image' | 'pdf';

export interface MediaCardData {
  id: string;

  title: string;

  description?: string;

  category?: string;

  type: MediaType;

  orientation: 'portrait' | 'landscape';

  thumbnail: string;

  url?: string;

  vimeoUrl?: string;

  calameoUrl?: string;

  tags?: string[];
}

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
