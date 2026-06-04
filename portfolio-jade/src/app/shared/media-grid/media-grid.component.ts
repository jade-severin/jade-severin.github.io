import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  input,
  Input,
  NgZone,
  ViewChild,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { MediaCardComponent } from '../media-card/media-card.component';

import { MediaLightboxComponent } from '../media-lightbox/media-lightbox.component';
import { MediaCardData } from '../../core/models/models';

@Component({
  selector: 'app-media-grid',
  standalone: true,
  imports: [CommonModule, MediaCardComponent, MediaLightboxComponent],
  templateUrl: './media-grid.component.html',
  styleUrl: './media-grid.component.scss',
})
export class MediaGridComponent implements AfterViewInit {
  @Input({ required: true })
  items: MediaCardData[] = [];

  selectedMedia: MediaCardData | null = null;

  @ViewChild('track')
  track!: ElementRef<HTMLDivElement>;

  private resizeObserver?: ResizeObserver;

  canScrollLeft = false;

  canScrollRight = true;

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      this.updateArrows();
    });

    this.resizeObserver = new ResizeObserver(() => {
      this.updateArrows();
    });

    this.resizeObserver.observe(this.track.nativeElement);
  }

  onTrackScroll(): void {
    this.updateArrows();
  }

  scrollLeft(): void {
    this.track.nativeElement.scrollBy({
      left: -500,
      behavior: 'smooth',
    });

    this.scheduleArrowUpdate();
  }

  scrollRight(): void {
    this.track.nativeElement.scrollBy({
      left: 500,
      behavior: 'smooth',
    });

    this.scheduleArrowUpdate();
  }

  private updateArrows(): void {
    const element = this.track.nativeElement;

    const tolerance = 30;

    this.canScrollLeft = element.scrollLeft > tolerance;

    this.canScrollRight =
      element.scrollLeft < element.scrollWidth - element.clientWidth - tolerance;
  }

  open(media: MediaCardData): void {
    this.selectedMedia = media;
  }

  close(): void {
    this.selectedMedia = null;
  }

  private scheduleArrowUpdate(): void {
    requestAnimationFrame(() => {
      this.updateArrows();

      setTimeout(() => {
        this.updateArrows();
      }, 150);

      setTimeout(() => {
        this.updateArrows();
      }, 350);
    });
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }
}
