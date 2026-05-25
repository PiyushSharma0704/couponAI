import React from "react";

import { ScrollView } from "react-native";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import { useTheme } from "@/providers/theme-provider";

export default function ScreenContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  const { colors, spacing } =
    theme;

  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        flex: 1,

        backgroundColor:
          colors.background,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          paddingHorizontal:
            spacing.lg,

          paddingTop:
            spacing.md,

          paddingBottom:
            spacing.xxl,
        }}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}