import { Tabs } from "expo-router";

import { House, ScanLine, TicketPercent, User } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#0a7ea4",
      }}
    >
      <Tabs.Screen
        name="coupons"
        options={{
          title: "Coupons",

          tabBarIcon: ({ color, size }) => (
            <TicketPercent color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <ScanLine color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",

          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
