import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { MediaCardData } from '../media-card/media-card.component';

import { SafeUrlPipe } from '../../shared/pipes/safe-url.pipe';

@Component({
  selector: 'app-media-lightbox',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './media-lightbox.component.html',
  styleUrl: './media-lightbox.component.scss',
})
export class MediaLightboxComponent implements OnChanges {
  @Input({ required: true })
  item!: MediaCardData;

  @Output()
  close = new EventEmitter<void>();

  isLoading = true;

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['item']?.currentValue) {
      return;
    }

    this.preloadCurrentMedia();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.onClose();
  }

  private preloadCurrentMedia(): void {
    this.isLoading = true;

    if (!this.item.url) {
      this.isLoading = false;
      return;
    }

    if (this.item.type === 'image') {
      const image = new Image();

      image.onload = () => {
        this.isLoading = false;
      };

      image.src = this.item.url;

      return;
    }

    if (this.item.type === 'video') {
      const video = document.createElement('video');

      video.preload = 'auto';

      video.onloadeddata = () => {
        this.isLoading = false;
      };

      video.src = this.item.url;

      return;
    }

    this.isLoading = false;
  }

  isVideo(item: MediaCardData): boolean {
    return item.type === 'video';
  }

  isVimeoVideo(): boolean {
    return this.item.type === 'video' && !!this.item.vimeoUrl;
  }

  isImage(item: MediaCardData): boolean {
    return item.type === 'image';
  }

  isPdf(item: MediaCardData): boolean {
    return item.type === 'pdf';
  }

  onClose(): void {
    this.close.emit();
  }
}
