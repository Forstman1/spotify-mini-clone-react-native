/**
 * Spotify-inspired theme colors and typography
 * Matches Spotify's official dark/light theme design system
 */

import { Platform } from "react-native";

// Spotify's signature green
const spotifyGreen = "#1DB954";
const spotifyGreenHover = "#1ed760";
const spotifyGreenDark = "#169c46";

// Spotify's signature dark theme only (saves time, looks more authentic)
export const Colors = {
  // Main colors (Spotify's dark theme)
  text: "#ffffff",
  textSecondary: "#b3b3b3",
  background: "#121212", // Spotify's main dark background
  backgroundSecondary: "#181818", // Cards and secondary surfaces

  // Spotify brand
  primary: spotifyGreen,
  primaryHover: spotifyGreenHover,

  // UI elements
  card: "#181818",
  border: "#2a2a2a",
  shadow: "rgba(0, 0, 0, 0.5)",

  // Navigation & tabs
  tint: spotifyGreen,
  tabBackground: "#000000",
  tabIconDefault: "#b3b3b3",
  tabIconSelected: spotifyGreen,

  // Player controls
  playerBackground: "#181818",
  progressBar: spotifyGreen,
  progressTrack: "#535353",

  // Interactive elements
  button: spotifyGreen,
  buttonText: "#000000",
  heart: "#1db954", // Green heart for liked songs

  // Status
  success: spotifyGreen,
  error: "#e22134",
  warning: "#ff9500",
};

// Spotify-inspired typography
export const Fonts = Platform.select({
  ios: {
    /** Primary font - similar to Spotify's Circular */
    primary: "system-ui",
    /** Bold headings */
    bold: "system-ui",
    /** Medium weight for subtitles */
    medium: "system-ui",
    /** Light weight for body text */
    light: "system-ui",
    /** Monospace for technical info */
    mono: "ui-monospace",
  },
  android: {
    primary: "Roboto",
    bold: "Roboto-Bold",
    medium: "Roboto-Medium",
    light: "Roboto-Light",
    mono: "monospace",
  },
  default: {
    primary: "system-ui",
    bold: "system-ui",
    medium: "system-ui",
    light: "system-ui",
    mono: "monospace",
  },
  web: {
    primary:
      "'Circular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    bold: "'Circular-Bold', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    medium:
      "'Circular-Medium', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    light:
      "'Circular-Light', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

// Typography scale inspired by Spotify
export const FontSizes = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
  "5xl": 48,
};

// Font weights
export const FontWeights = {
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  black: "900",
};

// Spacing scale
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 48,
  "3xl": 64,
};

// Border radius
export const BorderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};
