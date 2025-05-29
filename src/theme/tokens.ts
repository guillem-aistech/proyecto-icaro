// Material Design 3 color tokens and typography scale
export const colors = {
  // Main brand colors - Primary: Orange
  primary: {
    light: '#FFB47D', // Light primary
    main: '#FF7F2D', // Main primary - orange
    dark: '#E55A00', // Dark primary
  },
  onPrimary: '#FFFFFF',
  primaryContainer: '#FFDBC8',
  onPrimaryContainer: '#3F1800',
  
  // Secondary colors - complementary to orange
  secondary: {
    light: '#85D3FF',
    main: '#0098E1',
    dark: '#006BA5',
  },
  onSecondary: '#FFFFFF',
  secondaryContainer: '#CEE8FF',
  onSecondaryContainer: '#001E30',
  
  // Tertiary colors
  tertiary: {
    light: '#9BD9BB',
    main: '#2E9D67',
    dark: '#00703D',
  },
  onTertiary: '#FFFFFF',
  tertiaryContainer: '#A7F5D0',
  onTertiaryContainer: '#002111',
  
  // Neutral/surface colors
  surface: '#FDFBFF',
  surfaceVariant: '#F3DFD2',
  surfaceContainerLowest: '#FFFFFF',
  surfaceContainerLow: '#F9F1F0',
  surfaceContainer: '#F5EAE5',
  surfaceContainerHigh: '#EFE1DC',
  surfaceContainerHighest: '#E9DAD0',
  onSurface: '#1C1A19',
  onSurfaceVariant: '#53443C',
  
  // Error states
  error: '#BA1A1A',
  onError: '#FFFFFF',
  errorContainer: '#FFDAD6',
  onErrorContainer: '#410002',
  
  // Other system colors
  outline: '#857369',
  outlineVariant: '#D7C2B8',
  scrim: '#000000',
  inverseSurface: '#322F2D',
  inverseOnSurface: '#F6EFE7',
  inversePrimary: '#FFB68E',
  shadow: 'rgba(0, 0, 0, 0.15)',
};

export const typography = {
  // Display styles
  displayLarge: {
    fontSize: '57px',
    lineHeight: '64px',
    letterSpacing: '-0.25px',
    fontWeight: '400',
  },
  displayMedium: {
    fontSize: '45px',
    lineHeight: '52px',
    fontWeight: '400',
  },
  displaySmall: {
    fontSize: '36px',
    lineHeight: '44px',
    fontWeight: '400',
  },
  
  // Headline styles
  headlineLarge: {
    fontSize: '32px',
    lineHeight: '40px',
    fontWeight: '500',
  },
  headlineMedium: {
    fontSize: '28px',
    lineHeight: '36px',
    fontWeight: '500',
  },
  headlineSmall: {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: '500',
  },
  
  // Title styles
  titleLarge: {
    fontSize: '22px',
    lineHeight: '28px',
    fontWeight: '500',
  },
  titleMedium: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '600',
    letterSpacing: '0.15px',
  },
  titleSmall: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '600',
    letterSpacing: '0.1px',
  },
  
  // Body styles
  bodyLarge: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '400',
    letterSpacing: '0.5px',
  },
  bodyMedium: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '400',
    letterSpacing: '0.25px',
  },
  bodySmall: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '400',
    letterSpacing: '0.4px',
  },
  
  // Label styles
  labelLarge: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '500',
    letterSpacing: '0.1px',
  },
  labelMedium: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '500',
    letterSpacing: '0.5px',
  },
  labelSmall: {
    fontSize: '11px',
    lineHeight: '16px',
    fontWeight: '500',
    letterSpacing: '0.5px',
  },
};