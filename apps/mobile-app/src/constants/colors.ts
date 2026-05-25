export const lightColors = {
  background: "#FCFCFD",
  surface: "#FFFFFF",
  card: "#F8FAFC",
  primary: "#2563EB",
  secondary: "#7C3AED",
  accent: "#06B6D4",
  text: "#111827",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  success: "#22C55E",
  danger: "#EF4444",
  warning: "#F59E0B",
  gradientStart: "#60A5FA",
  gradientEnd: "#A78BFA",
  glow: "rgba(96,165,250,0.18)",
  shadow: "rgba(15,23,42,0.08)",
} as const;

export const darkColors = {
  background: "#09090B",
  surface: "#111113",
  card: "#18181B",
  primary: "#38BDF8",
  secondary: "#8B5CF6",
  accent: "#06B6D4",
  text: "#FAFAFA",
  textSecondary: "#A1A1AA",
  border: "#27272A",
  success: "#22C55E",
  danger: "#EF4444",
  warning: "#F59E0B",
  gradientStart: "#0EA5E9",
  gradientEnd: "#8B5CF6",
  glow: "rgba(56,189,248,0.18)",
  shadow: "rgba(0,0,0,0.4)",
} as const;

export type ThemeColors = typeof lightColors;