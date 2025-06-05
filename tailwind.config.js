/** @type {import('tailwindcss').Config} */
import { colors, typography } from './src/theme/tokens';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: colors.primary.main,
        'primary-light': colors.primary.light,
        'primary-dark': colors.primary.dark,
        'on-primary': colors.onPrimary,
        'primary-container': colors.primaryContainer,
        'on-primary-container': colors.onPrimaryContainer,
        
        // Secondary colors
        secondary: colors.secondary.main,
        'secondary-light': colors.secondary.light,
        'secondary-dark': colors.secondary.dark,
        'on-secondary': colors.onSecondary,
        'secondary-container': colors.secondaryContainer,
        'on-secondary-container': colors.onSecondaryContainer,
        
        // Tertiary colors
        tertiary: colors.tertiary.main,
        'tertiary-light': colors.tertiary.light,
        'tertiary-dark': colors.tertiary.dark,
        'on-tertiary': colors.onTertiary,
        'tertiary-container': colors.tertiaryContainer,
        'on-tertiary-container': colors.onTertiaryContainer,
        
        // Surface colors
        surface: colors.surface,
        'surface-variant': colors.surfaceVariant,
        'surface-container-lowest': colors.surfaceContainerLowest,
        'surface-container-low': colors.surfaceContainerLow,
        'surface-container': colors.surfaceContainer,
        'surface-container-high': colors.surfaceContainerHigh,
        'surface-container-highest': colors.surfaceContainerHighest,
        'surface-container-darker': '#1a1a1a', // Custom darker color (e.g., very dark gray)
        'on-surface': colors.onSurface,
        'on-surface-variant': colors.onSurfaceVariant,
        
        // Error colors
        error: colors.error,
        'on-error': colors.onError,
        'error-container': colors.errorContainer,
        'on-error-container': colors.onErrorContainer,
        
        // Other system colors
        outline: colors.outline,
        'outline-variant': colors.outlineVariant,
        scrim: colors.scrim,
        'inverse-surface': colors.inverseSurface,
        'inverse-on-surface': colors.inverseOnSurface,
        'inverse-primary': colors.inversePrimary,
      },
      fontSize: {
        'display-large': ['57px', { lineHeight: '64px', letterSpacing: '-0.25px', fontWeight: '400' }],
        'display-medium': ['45px', { lineHeight: '52px', fontWeight: '400' }],
        'display-small': ['36px', { lineHeight: '44px', fontWeight: '400' }],
        'headline-large': ['32px', { lineHeight: '40px', fontWeight: '500' }],
        'headline-medium': ['28px', { lineHeight: '36px', fontWeight: '500' }],
        'headline-small': ['24px', { lineHeight: '32px', fontWeight: '500' }],
        'title-large': ['22px', { lineHeight: '28px', fontWeight: '500' }],
        'title-medium': ['16px', { lineHeight: '24px', fontWeight: '600', letterSpacing: '0.15px' }],
        'title-small': ['14px', { lineHeight: '20px', fontWeight: '600', letterSpacing: '0.1px' }],
        'body-large': ['16px', { lineHeight: '24px', fontWeight: '400', letterSpacing: '0.5px' }],
        'body-medium': ['14px', { lineHeight: '20px', fontWeight: '400', letterSpacing: '0.25px' }],
        'body-small': ['12px', { lineHeight: '16px', fontWeight: '400', letterSpacing: '0.4px' }],
        'label-large': ['14px', { lineHeight: '20px', fontWeight: '500', letterSpacing: '0.1px' }],
        'label-medium': ['12px', { lineHeight: '16px', fontWeight: '500', letterSpacing: '0.5px' }],
        'label-small': ['11px', { lineHeight: '16px', fontWeight: '500', letterSpacing: '0.5px' }],
      },
    },
  },
  plugins: [],
};