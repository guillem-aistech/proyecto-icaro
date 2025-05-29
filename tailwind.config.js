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
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-large': typography.displayLarge.fontSize,
        'display-medium': typography.displayMedium.fontSize,
        'display-small': typography.displaySmall.fontSize,
        'headline-large': typography.headlineLarge.fontSize,
        'headline-medium': typography.headlineMedium.fontSize,
        'headline-small': typography.headlineSmall.fontSize,
        'title-large': typography.titleLarge.fontSize,
        'title-medium': typography.titleMedium.fontSize,
        'title-small': typography.titleSmall.fontSize,
        'body-large': typography.bodyLarge.fontSize,
        'body-medium': typography.bodyMedium.fontSize,
        'body-small': typography.bodySmall.fontSize,
        'label-large': typography.labelLarge.fontSize,
        'label-medium': typography.labelMedium.fontSize,
        'label-small': typography.labelSmall.fontSize,
      },
      lineHeight: {
        'display-large': typography.displayLarge.lineHeight,
        'display-medium': typography.displayMedium.lineHeight,
        'display-small': typography.displaySmall.lineHeight,
        'headline-large': typography.headlineLarge.lineHeight,
        'headline-medium': typography.headlineMedium.lineHeight,
        'headline-small': typography.headlineSmall.lineHeight,
        'title-large': typography.titleLarge.lineHeight,
        'title-medium': typography.titleMedium.lineHeight,
        'title-small': typography.titleSmall.lineHeight,
        'body-large': typography.bodyLarge.lineHeight,
        'body-medium': typography.bodyMedium.lineHeight,
        'body-small': typography.bodySmall.lineHeight,
        'label-large': typography.labelLarge.lineHeight,
        'label-medium': typography.labelMedium.lineHeight,
        'label-small': typography.labelSmall.lineHeight,
      },
      letterSpacing: {
        tight: '-0.25px',
        normal: '0px',
        wide: '0.1px',
        wider: '0.15px',
        widest: '0.5px',
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'elevation-1': '0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'elevation-2': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elevation-3': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'elevation-4': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'elevation-5': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};