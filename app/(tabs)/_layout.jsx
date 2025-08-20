import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { useColorScheme } from "nativewind";
import { useState } from "react";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export default function TabLayout() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colorScheme == "dark" ? "#252526" : "white",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarLabel: "Todos",
          tabBarLabelStyle: {
            fontSize: responsiveFontSize(2),
            fontFamily: "Outfit",
            color: selectedTab === "Home" ? "#1A659E" : "gray",
          },
          tabBarIcon: () => {
            return (
              <Ionicons
                name="flash-outline"
                size={30}
                style={{
                  color: selectedTab === "Home" ? "#1A659E" : "gray",
                }}
              />
            );
          },
        }}
        listeners={{
          tabPress: () => setSelectedTab("Home"),
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          tabBarLabelStyle: {
            fontSize: responsiveFontSize(2),
            fontFamily: "Outfit",
            color: selectedTab === "Settings" ? "#1A659E" : "gray",
          },
          tabBarIcon: () => {
            return (
              <Ionicons
                name="settings"
                size={30}
                style={{
                  color: selectedTab === "Settings" ? "#1A659E" : "gray",
                }}
              />
            );
          },
        }}
        listeners={{
          tabPress: () => setSelectedTab("Settings"),
        }}
      />
    </Tabs>
  );
}
