import { Component, input } from '@angular/core';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';
import { EditorialPublication } from '../../core/models/models';

@Component({
  selector: 'app-calameo-container',
  imports: [SafeUrlPipe],
  templateUrl: './calameo-container.component.html',
  styleUrl: './calameo-container.component.scss',
})
export class CalameoContainerComponent {
  publications = input.required<EditorialPublication[]>();
}
