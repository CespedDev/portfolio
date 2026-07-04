import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SOCIAL_LINKS } from '../shared/social-links';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.html',
  styleUrls: ['./social-buttons.scss'],
  standalone: true,
  imports: [ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialButtonsComponent {
  readonly socialLinks = SOCIAL_LINKS;
}
