import Ionicons from "@expo/vector-icons/Ionicons";
import { useColorScheme } from "nativewind";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default function Headers({ totalTask, checkedTasks, onAddTask }) {
  const [textInputValue, setTextInputValue] = useState("");
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const AddNewTask = () => {
    setTextInputValue("");
    onAddTask(textInputValue);
  };
  const percentage =
    totalTask === 0 ? 0 : Math.round((checkedTasks / totalTask) * 100) / 100;

  return (
    <Animatable.View
      animation="slideInDown"
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
            name="flash-outline"
            color={"white"}
            size={responsiveWidth(10)}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: responsiveFontSize(4),
            }}
            className="leading-tight font-outfitbold text-sky-800"
          >
            Today's Task 👀
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
            }}
            className="leading-tight font-outfit text-black dark:text-white"
          >
            {checkedTasks} of {totalTask} Completed
          </Text>
        </View>
      </View>
      <View className="flex flex-row gap-4 mt-10 items-center">
        <Progress.Bar
          progress={percentage}
          style={{
            height: responsiveHeight(1.5),
            borderWidth: 0,
            backgroundColor: colorScheme == "dark" ? "#3e3e42" : "white",
          }}
          width={responsiveWidth(75)}
          borderRadius={12}
          height={responsiveHeight(1.5)}
          color={"#075985"}
        />
        <Text
          style={{
            fontSize: responsiveFontSize(2),
          }}
          className="leading-tight font-outfitbold text-sky-800"
        >
          {percentage * 100}%
        </Text>
      </View>
      <View className="mt-9 flex flex-row justify-between items-center">
        <TextInput
          style={{
            width: responsiveWidth(72),
            height: responsiveHeight(6),
            fontSize: responsiveFontSize(2.5),
          }}
          placeholder="What needs to be done?"
          placeholderTextColor={"gray"}
          value={textInputValue}
          onChangeText={(text) => setTextInputValue(text)}
          className="pl-5 border font-outfit text-black
           dark:text-white bg-white rounded-lg
           dark:bg-[#252526] dark:border border-sky-800
           "
        />

        {textInputValue.length > 0 ? (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              AddNewTask();
            }}
          >
            <Ionicons
              name="checkmark-circle"
              size={responsiveWidth(15)}
              color="#3bbc27ff"
            />
          </TouchableOpacity>
        ) : (
          <Ionicons
            name="add-circle"
            size={responsiveWidth(15)}
            color="#1A659E"
          />
        )}
      </View>
    </Animatable.View>
  );
}
