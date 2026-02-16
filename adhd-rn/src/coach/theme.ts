import { Platform } from 'react-native';

export const coachTheme = {
  colors: {
    backgroundTop: '#f7f1e8',
    backgroundBottom: '#e9f0ea',
    surface: '#ffffff',
    surfaceWarm: '#fff4e9',
    surfaceCool: '#eef5f2',
    textPrimary: '#2b2723',
    textSecondary: '#5e584f',
    textMuted: '#8b8176',
    accent: '#d86b4c',
    accentSoft: '#f4d1c6',
    accentDeep: '#b6543f',
    teal: '#2f5d50',
    sage: '#b8d2c4',
    border: '#e7ddd1',
    highlight: '#f1e0c6',
    success: '#4f9d7b',
  },
  spacing: {
    xs: 6,
    sm: 10,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radius: {
    sm: 12,
    md: 18,
    lg: 26,
    pill: 999,
  },
  fonts: {
    heading: Platform.select({ ios: 'Avenir Next', android: 'serif', default: 'serif' }) ?? 'serif',
    body: Platform.select({ ios: 'Avenir', android: 'serif', default: 'serif' }) ?? 'serif',
  },
};
