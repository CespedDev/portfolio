export interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

export const CONTACT_EMAIL = 'carloscf.correo@gmail.com';

// TODO: confirmar URL de itch.io
export const SOCIAL_LINKS: SocialLink[] = [
  { icon: 'pi pi-github',   url: 'https://github.com/CespedDev',              label: 'GitHub'   },
  { icon: 'itch-icon',      url: 'https://cespeddev.itch.io',                 label: 'Itch.io'  },
  { icon: 'pi pi-linkedin', url: 'https://www.linkedin.com/in/cespeddev/',    label: 'LinkedIn' },
  { icon: 'pi pi-envelope', url: `mailto:${CONTACT_EMAIL}`,                   label: 'Email'    },
];
