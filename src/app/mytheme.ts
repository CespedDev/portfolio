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
      950: '#022c22',
    },
    colorScheme: {
      dark: {
        primary: {
          color: '#10b981',
          buttonBackground: '#059669',
          contrastColor: '#ffffff',
          hoverColor: '#047857',
          activeColor: '#065f46',
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
          950: '#0a0a0a',
        },
      },
    },
  },
});

export default MyTheme;
