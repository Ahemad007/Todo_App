import Body from "@/Components/Settings/Body";
import Headers from "@/Components/Settings/Headers";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings({ show = false, total }) {
  return (
    !show && (
      <SafeAreaView className="flex-1 dark:bg-[#252526] ">
        <Headers />
        <Body total={total} />
      </SafeAreaView>
    )
  );
}
