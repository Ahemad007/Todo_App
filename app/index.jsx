import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import "../global.css";

export default function Index() {
  const [totalTasks, setTotalTasks] = useState(0);
  useEffect(() => {
    const getTasks = async () => {
      try {
        const tasks = await AsyncStorage.getItem("my-todo");
        if (tasks !== null) {
          const taskList = JSON.parse(tasks);
          setTotalTasks(taskList.length);
          if (totalTasks > 0) {
            router.replace("/(tabs)/Home");
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTasks();
  });

  return (
    <>
      <Image
        source={require("../assets/images/bg.png")}
        className="absolute w-full h-full"
        blurRadius={10}
      />
      <View
        style={{
          alignSelf: "center",
        }}
        className="absolute"
      >
        <View
          style={{
            width: responsiveWidth(90),
            marginTop: responsiveHeight(15),
          }}
        >
          <Animatable.Text
            animation="fadeInLeft"
            style={{
              fontSize: responsiveFontSize(6.5),
            }}
            className="leading-tight font-outfitbold"
          >
            WELCOME
          </Animatable.Text>
          <Animatable.Text
            animation="fadeInLeft"
            style={{
              fontSize: responsiveFontSize(6.5),
            }}
            className="leading-tight font-outfitbold text-sky-800"
          >
            TO
          </Animatable.Text>
          <Animatable.Text
            animation="fadeInLeft"
            style={{
              fontSize: responsiveFontSize(6.5),
            }}
            className="leading-tight font-outfitbold"
          >
            TODO APP
          </Animatable.Text>
          <Animatable.Text
            animation="fadeInLeft"
            style={{
              fontSize: responsiveFontSize(3),
              marginTop: responsiveHeight(3),
            }}
            className="leading-tight font-outfit"
          >
            Here you can manage your tasks. You can add, delete and update your
            tasks. You can also mark your tasks as completed.
          </Animatable.Text>
          <Animatable.View animation="fadeInUp">
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                marginTop: responsiveHeight(15),
                width: responsiveWidth(90),
                height: responsiveHeight(5),
                justifyContent: "center",
              }}
              className="bg-sky-800 rounded-lg"
              onPress={() => router.replace("(tabs)/Home")}
            >
              <Text
                style={{
                  fontSize: responsiveFontSize(3),
                }}
                className="text-center leading-tight font-outfitbold text-white"
              >
                Get Started
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </View>
    </>
  );
}
