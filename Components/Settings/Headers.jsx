import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default function Headers() {
  return (
    <View
      style={{
        width: responsiveWidth(88),
      }}
      className="mt-8 self-center"
    >
      <View className="flex flex-row gap-4">
        <View
          style={{
            width: responsiveWidth(18),
            height: responsiveHeight(8),
          }}
          className="rounded-lg bg-sky-800 flex items-center justify-center"
        >
          <Ionicons
            name="settings"
            color={"white"}
            size={responsiveWidth(10)}
          />
        </View>
        <View className="justify-center">
          <Text
            style={{
              fontSize: responsiveFontSize(4),
            }}
            className="font-outfitbold text-black dark:text-white"
          >
            Settings
          </Text>
        </View>
      </View>
    </View>
  );
}
