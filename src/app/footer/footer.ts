import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from 'primeng/button';
import { Divider } from 'primeng/divider';
import { TranslatePipe } from '@ngx-translate/core';
import { SOCIAL_LINKS } from '../shared/social-links';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, ButtonDirective, Divider, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  currentYear = new Date().getFullYear();

  socialLinks = SOCIAL_LINKS;

  quickLinks = [
    { label: 'nav.home',      route: '/home'      },
    { label: 'nav.portfolio', route: '/portfolio' },
    { label: 'nav.hobbies',   route: '/hobbies'   },
    { label: 'nav.bio',       route: '/bio'       },
    { label: 'nav.contact',   route: '/contact'   }
  ];
}
