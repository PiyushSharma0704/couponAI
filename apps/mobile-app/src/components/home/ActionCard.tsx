import { Pressable, View } from "react-native";

import { useTheme } from "@/providers/theme-provider";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Text } from "@/components/ui/text";

interface Props {
  emoji: string;

  title: string;

  subtitle: string;

  onPress?: () => void;
}

export default function ActionCard({
  emoji,
  title,
  subtitle,
  onPress,
}: Props) {
  const { theme } = useTheme();

  const { colors } = theme;

  return (
    <Pressable
      onPress={onPress}
      style={{
        flex: 1,
        marginBottom: 16,
        marginTop: 16,
      }}
    >
      {({ pressed }) => (
        <Card
          style={{
            backgroundColor:
              colors.card,

            borderColor:
              colors.border,

            opacity: pressed
              ? 0.9
              : 1,

            transform: [
              {
                scale: pressed
                  ? 0.98
                  : 1,
              },
            ],
          }}
          className="rounded-3xl border"
        >
          <CardContent className="p-5">
            <View>
              <Text className="text-4xl mb-4">
                {emoji}
              </Text>

              <Text
                style={{
                  color:
                    colors.text,
                }}
                className="text-xl font-bold mb-2"
              >
                {title}
              </Text>

              <Text
                style={{
                  color:
                    colors.textSecondary,
                }}
                className="leading-6"
              >
                {subtitle}
              </Text>
            </View>
          </CardContent>
        </Card>
      )}
    </Pressable>
  );
}