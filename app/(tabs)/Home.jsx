import Body from "@/Components/Home/Body";
import { useColorScheme } from "nativewind";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView className="dark:bg-[#252526] flex-1">
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <Body />
    </SafeAreaView>
  );
}
