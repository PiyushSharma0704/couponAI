import { TouchableOpacity, Text } from "react-native";
import { useTheme } from "@/providers/theme-provider";

interface Props {
  emoji: string;
  title: string;
  subtitle: string;
  onPress?: () => void;
}

export default function ActionCard({ emoji, title, subtitle, onPress }: Props) {
  const { theme } = useTheme();
  const { colors } = theme;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={{
        backgroundColor: colors.card,
        borderColor: colors.border,
      }}
      className="rounded-3xl p-5 border mt-4"
    >
      <Text className="text-4xl mb-4">{emoji}</Text>

      <Text
        style={{ color: colors.text }}
        className="text-xl font-bold mb-2"
      >
        {title}
      </Text>

      <Text style={{ color: colors.textSecondary }} className="leading-6">
        {subtitle}
      </Text>
    </TouchableOpacity>
  );
}