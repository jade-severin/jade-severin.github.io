import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss',
})
export class SectionTitleComponent {
  title = input.required<string>();

  subtitle = input('');

  private readonly angle = Math.floor(Math.random() * 3) + 179;
  private readonly palette = Math.random() > 0.5 ? 'blue' : 'orange';

  protected brushStyle = computed(() => ({
    '--brush-angle': `${this.angle}deg`,
    '--brush-gradient':
      this.palette === 'blue'
        ? 'linear-gradient(90deg, #00d4ff, #4f7dff)'
        : 'linear-gradient(90deg, #ff8a3d, #ff4d9a)',
  }));
}
