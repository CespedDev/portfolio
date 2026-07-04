import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from 'primeng/button';
import { Divider } from 'primeng/divider';
import { injectLang } from '../shared/lang';
import { UI } from '../shared/ui-texts';
import { SOCIAL_LINKS } from '../shared/social-links';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, ButtonDirective, Divider],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly t = UI;
  readonly lang = injectLang();

  currentYear = new Date().getFullYear();

  socialLinks = SOCIAL_LINKS;

  quickLinks = [
    { label: UI.nav.home,      route: '/home'      },
    { label: UI.nav.portfolio, route: '/portfolio' },
    { label: UI.nav.hobbies,   route: '/hobbies'   },
    { label: UI.nav.bio,       route: '/bio'       },
    { label: UI.nav.contact,   route: '/contact'   }
  ];
}
