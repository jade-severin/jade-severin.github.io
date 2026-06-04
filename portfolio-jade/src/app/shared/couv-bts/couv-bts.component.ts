import { Component, Input } from '@angular/core';
import { CampaignVisual } from '../../core/models/models';

@Component({
  selector: 'app-couv-bts',
  imports: [],
  templateUrl: './couv-bts.component.html',
  styleUrl: './couv-bts.component.scss',
})
export class CouvBtsComponent {
  @Input({ required: true })
  visuals: CampaignVisual[] = [];
}
