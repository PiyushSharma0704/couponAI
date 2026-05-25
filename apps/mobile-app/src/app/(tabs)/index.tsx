import { SafeAreaView, ScrollView } from "react-native";

// import Header from "@/components/home/Header";
import HeroCard from "@/components/home/HeroCard";
import ActionCard from "@/components/home/ActionCard";
// import RecentCoupons from "@/components/home/RecentCoupons";
// import AIInsights from "@/components/home/AIInsights";

import { useTheme } from "@/providers/theme-provider";

export default function HomeScreen() {
  const { theme, isDark } = useTheme();
  const { colors, spacing, typography, radius } = theme; // ✅ one level deeper

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          padding: spacing.lg,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* <Header /> */}

        <HeroCard />

        {/* ACTIONS */}
        <ActionCard
          emoji="📷"
          title="Open Camera"
          subtitle="Capture coupons in real-time"
        />

        <ActionCard
          emoji="🖼️"
          title="Pick Image"
          subtitle="Upload from gallery"
        />

        {/* <RecentCoupons /> */}

        {/* <AIInsights /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
