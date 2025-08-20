import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import { Switch, Text, View } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default function Body() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  useEffect(() => {
    const getTasks = async () => {
      try {
        const tasks = await AsyncStorage.getItem("my-todo");
        if (tasks !== null) {
          const taskList = JSON.parse(tasks);
          setTotalTasks(taskList.length);
          const completedTasks = taskList.filter((task) => task.isDone);
          setCompletedTasks(completedTasks.length);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTasks();
  });
  return (
    <View className="mt-9">
      <View
        style={{
          width: responsiveWidth(90),
          height: responsiveHeight(50),
        }}
        className="rounded-3xl p-5 bg-white dark:bg-[#2d2d30] flex self-center justify-center"
      >
        <Text
          style={{
            fontSize: responsiveFontSize(3),
          }}
          className="font-outfitbold text-black dark:text-white"
        >
          Progress Stats
        </Text>
        <View className="mt-5 flex flex-col gap-4">
          <View
            style={{
              height: responsiveHeight(12),
            }}
            className="bg-gray-200 dark:bg-[#3e3e42] pl-5 border-l-8
           border-sky-800 rounded-2xl flex flex-row gap-5 items-center"
          >
            <View
              style={{
                width: responsiveWidth(13),
                height: responsiveHeight(6),
              }}
              className="bg-sky-800 rounded-full items-center justify-center"
            >
              <Ionicons
                name="list-outline"
                size={responsiveWidth(7)}
                color="white"
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: responsiveFontSize(2.5),
                }}
                className="font-outfitbold text-black dark:text-white"
              >
                {totalTasks}
              </Text>
              <Text
                style={{
                  fontSize: responsiveFontSize(2.5),
                }}
                className="font-outfit text-gray dark:text-white"
              >
                Total Tasks
              </Text>
            </View>
          </View>
          <View
            style={{
              height: responsiveHeight(12),
            }}
            className="bg-gray-200 dark:bg-[#3e3e42] pl-5 border-l-8
           border-red-800 rounded-2xl flex flex-row gap-5 items-center"
          >
            <View
              style={{
                width: responsiveWidth(13),
                height: responsiveHeight(6),
              }}
              className="bg-red-800  rounded-full items-center justify-center"
            >
              <Ionicons
                name="checkmark-circle"
                size={responsiveWidth(7)}
                color="white"
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: responsiveFontSize(2.5),
                }}
                className="font-outfitbold text-black dark:text-white"
              >
                {completedTasks}
              </Text>
              <Text
                style={{
                  fontSize: responsiveFontSize(2.5),
                }}
                className="font-outfit text-gray dark:text-white"
              >
                Completed Tasks
              </Text>
            </View>
          </View>
          <View
            style={{
              height: responsiveHeight(12),
            }}
            className="bg-gray-200 dark:bg-[#3e3e42] pl-5 border-l-8
           border-yellow-500 rounded-2xl flex flex-row gap-5 items-center"
          >
            <View
              style={{
                width: responsiveWidth(13),
                height: responsiveHeight(6),
              }}
              className="bg-yellow-500 rounded-full items-center justify-center"
            >
              <Ionicons name="time" size={responsiveWidth(7)} color="white" />
            </View>
            <View>
              <Text
                style={{
                  fontSize: responsiveFontSize(2.5),
                }}
                className="font-outfitbold text-black dark:text-white"
              >
                {totalTasks - completedTasks}
              </Text>
              <Text
                style={{
                  fontSize: responsiveFontSize(2.5),
                }}
                className="font-outfit text-gray dark:text-white"
              >
                Active Tasks
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: responsiveWidth(90),
        }}
        className="mt-4 dark:bg-[#2d2d30] rounded-xl bg-white p-5 self-center"
      >
        <Text
          style={{
            fontSize: responsiveFontSize(3),
          }}
          className="font-outfitbold text-black dark:text-white"
        >
          Prefrences
        </Text>
        <View className="flex flex-row justify-between items-center">
          <View className="mt-5 flex flex-row items-center gap-4">
            <View
              style={{
                width: responsiveWidth(15),
                height: responsiveHeight(7),
              }}
              className="bg-sky-800  rounded-xl justify-center items-center"
            >
              <Ionicons name="moon" size={responsiveWidth(7)} color="white" />
            </View>
            <Text
              style={{
                fontSize: responsiveFontSize(2.5),
              }}
              className="font-outfitbold text-black dark:text-white"
            >
              Dark Mode
            </Text>
          </View>
          <Switch
            trackColor={{ false: "gray", true: "#3e3e42" }}
            thumbColor={colorScheme == "dark" ? "#252526" : "white"}
            style={{
              transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
              marginTop: 15,
            }}
            value={colorScheme == "dark"}
            onChange={toggleColorScheme}
          />
        </View>
      </View>
    </View>
  );
}
