import { ChangeDetectorRef, Component, signal } from '@angular/core';

@Component({
  selector: 'app-social-links',
  standalone: true,
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss',
})
export class SocialLinksComponent {
  protected readonly instagramUrl = 'https://www.instagram.com/piano.cktail/';
  protected readonly linkedInUrl = 'https://fr.linkedin.com/in/jade-severin-com-culture';
  protected readonly cvUrl = 'SEVERIN_Jade_CV.pdf';
  protected readonly email = 'severinjade@gmail.com';

  protected readonly showToast = signal(false);

  protected readonly hidingToast = signal(false);

  private timeoutId?: number;

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email);

      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }

      this.hidingToast.set(false);
      this.showToast.set(true);

      this.timeoutId = window.setTimeout(() => {
        this.hidingToast.set(true);

        window.setTimeout(() => {
          this.showToast.set(false);
        }, 250);
      }, 2200);
    } catch (error) {
      console.error(error);
    }
  }
}
