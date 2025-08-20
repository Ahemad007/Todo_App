import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "../global.css"
export default function RootLayout() {
  useFonts({
    Outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Bold": require("../assets/fonts/Outfit-Bold.ttf"),
  });
  
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
