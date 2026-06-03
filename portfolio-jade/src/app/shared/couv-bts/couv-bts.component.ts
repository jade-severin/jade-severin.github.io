import { Component, Input } from '@angular/core';

export interface CampaignVisual {
  cover: string;
  backstage: string;
  title: string;
  role: string;
}

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
