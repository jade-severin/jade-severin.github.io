import {
  Component
}
  from '@angular/core';

import {
  RouterOutlet
}
  from '@angular/router';
import { BackgroundComponent } from './shared/background/background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BackgroundComponent
  ],
templateUrl: './app.component.html',})
export class App { }