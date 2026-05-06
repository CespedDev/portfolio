import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const MyTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#d1fae5',
      100: '#a7f3d0',
      200: '#6ee7b7',
      300: '#4ade80',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
      950: '#022c22'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{primary.500}',
          contrastColor: '#ffffff',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}'
        },
        surface: {
          0: '#ffffff',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        }
      },
      dark: {
        primary: {
          color: '#10b981',
          contrastColor: '#1c1c1c',
          hoverColor: '#34d399',
          activeColor: '#4ade80'
        },
        surface: {
          0: '#FBFBFF',
          50: '#f5f5f7',
          100: '#e8e8ea',
          200: '#d4d4d6',
          300: '#a8a8ab',
          400: '#717174',
          500: '#52525a',
          600: '#3f3f46',
          700: '#2d2d2d',
          800: '#252525',
          900: '#1c1c1c',
          950: '#0a0a0a'
        }
      }
    }
  }
});

export default MyTheme;
