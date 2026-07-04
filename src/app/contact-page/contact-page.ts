import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MessageModule } from 'primeng/message';
import { injectLang } from '../shared/lang';
import { UI } from '../shared/ui-texts';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '../shared/social-links';

/*
 * ── Cómo activar el envío real del formulario ────────────────────────
 * 1. Crea un formulario gratuito en https://formspree.io
 * 2. Pega aquí tu endpoint, p. ej. 'https://formspree.io/f/abcdwxyz'
 * Mientras esté vacío, el botón abre el cliente de correo (mailto).
 * ─────────────────────────────────────────────────────────────────────
 */
const CONTACT_ENDPOINT = '';

type ContactStatus = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule, TextareaModule, MessageModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage {
  readonly t = UI;
  readonly lang = injectLang();

  readonly socialLinks = SOCIAL_LINKS;
  readonly status = signal<ContactStatus>('idle');

  async submit(form: NgForm): Promise<void> {
    if (form.invalid || this.status() === 'sending') return;
    const { name, email, message } = form.value;

    if (!CONTACT_ENDPOINT) {
      const subject = encodeURIComponent(`[Portfolio] ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    this.status.set('sending');
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        this.status.set('sent');
        form.resetForm();
      } else {
        this.status.set('error');
      }
    } catch {
      this.status.set('error');
    }
  }
}
