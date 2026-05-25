import { SafeAreaView, ScrollView } from "react-native";

import { useTheme } from "@/providers/theme-provider";

export default function ScreenContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  const { colors, spacing, typography, radius } = theme; 


  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: spacing.lg,
        }}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
