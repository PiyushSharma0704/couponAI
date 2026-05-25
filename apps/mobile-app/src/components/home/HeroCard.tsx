import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@/providers/theme-provider";

export default function HeroCard() {
  const { theme } = useTheme();
  const { colors } = theme;

  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="rounded-3xl p-6 mt-6 overflow-hidden"
    >
      <View
        style={{
          width: 140,
          height: 140,
          borderRadius: 999,
          backgroundColor: colors.glw,
          position: "absolute",
          top: -40,
          right: -20,
          opacity: 0.3,
        }}
      />

      <Text className="text-white text-3xl font-bold mb-3">
        Scan Coupons with AI
      </Text>

      <Text className="text-white/80 text-base leading-6">
        Upload coupons instantly and let AI extract discount details, expiry
        dates & offers.
      </Text>
    </LinearGradient>
  );
}