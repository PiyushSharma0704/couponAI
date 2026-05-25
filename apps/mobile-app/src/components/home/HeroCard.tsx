import { View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { useTheme } from "@/providers/theme-provider";

import { Card, CardContent } from "@/components/ui/card";

import { Text } from "@/components/ui/text";

export default function HeroCard() {
  const { theme } = useTheme();

  const { colors } = theme;

  return (
    <Card className="rounded-[32px] overflow-hidden border-0 mt-6 mb-6">
      <LinearGradient
        colors={[colors.gradientStart, colors.gradientEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <CardContent className="p-7 relative">
          {/* Glow Orb */}
          <View
            style={{
              width: 180,

              height: 180,

              borderRadius: 999,

              position: "absolute",

              top: -50,

              right: -40,

              backgroundColor: "rgba(255,255,255,0.12)",
            }}
          />

          {/* Small Tag */}
          <View
            className="self-start px-3 py-1 rounded-full mb-4"
            style={{
              backgroundColor: "rgba(255,255,255,0.14)",
            }}
          >
            <Text className="text-white text-xs font-medium">AI Powered</Text>
          </View>

          {/* Title */}
          <Text className="text-white text-3xl font-bold mb-3 leading-tight">
            Scan Coupons
            {"\n"}
            with AI
          </Text>

          {/* Subtitle */}
          <Text className="text-white/80 text-base leading-6">
            Upload coupons instantly and let AI extract discount details, expiry
            dates & offers.
          </Text>
        </CardContent>
      </LinearGradient>
    </Card>
  );
}
