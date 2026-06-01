import {
  Component,
  HostListener,
  signal
} from '@angular/core';

@Component({
  selector: 'app-background',
  standalone: true,
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss'
})
export class BackgroundComponent {

  mouseX = signal(0);
  mouseY = signal(0);

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    this.mouseX.set(event.clientX - centerX);
    this.mouseY.set(event.clientY - centerY);
  }
}