import { Component } from '@angular/core';
import { ButtonDirective } from 'primeng/button';
import { Divider } from 'primeng/divider';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ButtonDirective, Divider, TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { icon: 'pi pi-github', url: 'https://github.com/carlosmmp', label: 'GitHub' },
    { icon: 'pi pi-linkedin', url: 'https://www.linkedin.com/in/carlosmmp/', label: 'LinkedIn' },
    { icon: 'pi pi-envelope', url: 'mailto:contact@carlosmmp.com', label: 'Email' }
  ];

  quickLinks = [
    { label: 'nav.home', route: '/' },
    { label: 'nav.portfolio', route: '/portfolio' },
    { label: 'nav.bio', route: '/bio' },
    { label: 'nav.contact', route: '/contact' }
  ];
}
