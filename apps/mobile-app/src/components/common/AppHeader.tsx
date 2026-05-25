import { View, Text } from "react-native";

import { useTheme } from "@/providers/theme-provider";

interface Props {
  title: string;
  subtitle?: string;
}

export default function AppHeader({ title, subtitle }: Props) {
  const { theme } = useTheme();

  const { colors, spacing, typography, radius } = theme;

  return (
    <View
      style={{
        marginBottom: 24,
      }}
    >
      {subtitle && (
        <Text
          style={[
            typography.caption,
            {
              color: colors.textSecondary,
              marginBottom: 4,
            },
          ]}
        >
          {subtitle}
        </Text>
      )}

      <Text
        style={[
          typography.h1,
          {
            color: colors.text,
          },
        ]}
      >
        {title}
      </Text>
    </View>
  );
}
