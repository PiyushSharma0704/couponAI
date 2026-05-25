import { View, Text } from "react-native";

import { useTheme } from "@/hooks/use-theme";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <View
      className="flex-1 items-center justify-center"
      style={{
        backgroundColor: theme.colors.background,
      }}
    >
      {/* <Text
        className="text-4xl font-bold"
        style={{
          color: theme.colors.primary,
        }}
      >
        CouponAI
      </Text> */}

      {/* <Text
        className="mt-3 text-base"
        style={{
          color: theme.colors.textSecondary,
        }}
      >
        AI Powered Coupon Wallet
      </Text> */}
    </View>
  );
}
