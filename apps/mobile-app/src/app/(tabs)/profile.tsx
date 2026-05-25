import HeroCard from "@/components/home/HeroCard";
import ActionCard from "@/components/home/ActionCard";

import { useTheme } from "@/providers/theme-provider";
import AppHeader from "@/components/common/AppHeader";
import ScreenContainer from "@/components/common/ScreenContainer";

export default function ProfileScreen() {
  const { theme, isDark } = useTheme();
  const { colors, spacing, typography, radius } = theme; // ✅ one level deeper

  return (
    <ScreenContainer>
      <AppHeader subtitle="Welcome back" title="CouponAI" />
    </ScreenContainer>
  );
}
