export interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

// TODO: confirmar URL de itch.io
export const SOCIAL_LINKS: SocialLink[] = [
  { icon: 'pi pi-github',   url: 'https://github.com/CespedDev',              label: 'GitHub'   },
  { icon: 'pi pi-box',      url: 'https://cespeddev.itch.io',                 label: 'Itch.io'  },
  { icon: 'pi pi-linkedin', url: 'https://www.linkedin.com/in/cespeddev/',    label: 'LinkedIn' },
  { icon: 'pi pi-envelope', url: 'mailto:carloscf.correo@gmail.com',          label: 'Email'    },
];
