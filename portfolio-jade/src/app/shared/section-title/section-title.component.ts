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

  private readonly brushClipPath = this.generateBrushClipPath();

  protected brushStyle = computed(() => ({
    '--brush-angle': `${this.angle}deg`,
    '--brush-gradient':
      this.palette === 'blue'
        ? 'linear-gradient(90deg, #00d4ff, #4f7dff)'
        : 'linear-gradient(90deg, #ff8a3d, #ff4d9a)',

    '--brush-clip': this.brushClipPath,
  }));

  private generateBrushClipPath(): string {
    const points = [
      [0, 46],
      [6, 42],
      [14, 48],
      [22, 44],
      [31, 51],
      [40, 45],
      [49, 53],
      [58, 47],
      [67, 54],
      [76, 46],
      [85, 52],
      [93, 45],
      [100, 49],

      [100, 63],
      [94, 58],
      [86, 64],
      [77, 57],
      [68, 65],
      [58, 58],
      [49, 66],
      [39, 57],
      [30, 64],
      [20, 56],
      [10, 62],
      [0, 55],
    ];

    const jitter = (value: number): number => value + (Math.random() * 8 - 4); // ±2%

    const polygon = points.map(([x, y]) => `${x}% ${jitter(y).toFixed(1)}%`).join(', ');

    return `polygon(${polygon})`;
  }
}
