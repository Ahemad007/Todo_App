import Ionicons from "@expo/vector-icons/Ionicons";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default function Card({ item, handleDone, onDelete }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedText, setEditedText] = useState(item.title);

  return (
    <>
      <Animatable.View
        animation="fadeInUp"
        delay={item.length * 100}
        style={{
          width: responsiveWidth(85),
        }}
        className="bg-white dark:bg-[#3e3e42] rounded-xl p-3 mb-4 shadow-xl"
      >
        <View className="flex flex-row items-center gap-3">
          <Checkbox
            value={item.isDone}
            onValueChange={() => {
              handleDone(item.id);
            }}
            style={{
              width: responsiveWidth(8),
              height: responsiveHeight(3.5),
              borderRadius: 99,
            }}
          />
          <TextInput
            value={editedText}
            editable={isEditMode}
            onChangeText={(text) => setEditedText(text)}
            className="text-2xl font-outfit text-black dark:text-white"
            style={{
              borderWidth: isEditMode ? 1 : 0,
              width: responsiveWidth(70),
              paddingLeft: 10,
              borderRadius: 10,
              textDecorationLine: item.isDone ? "line-through" : "none",
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            marginLeft: 45,
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              {
                isEditMode ? setIsEditMode(false) : setIsEditMode(true);
              }
            }}
            activeOpacity={0.5}
            style={{
              display: "flex",
              flexDirection: "row",
              borderRadius: 99,
              gap: isEditMode ? 8 : 0,
              width: isEditMode ? responsiveWidth(25) : responsiveWidth(10.5),
              height: responsiveHeight(5),
              backgroundColor: "darkorange",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons
              name={isEditMode ? "checkmark" : "pencil"}
              size={responsiveWidth(5)}
              color="white"
            />
            {isEditMode ? (
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  color: "white",
                  fontFamily: "Outfit",
                }}
              >
                Save
              </Text>
            ) : null}
          </TouchableOpacity>
          {isEditMode === false && (
            <TouchableOpacity
              onPress={() => {
                {
                  isEditMode ? setIsEditMode(false) : onDelete(item.id);
                }
              }}
              activeOpacity={0.5}
              style={{
                borderRadius: 99,
                width: responsiveWidth(10.5),
                height: responsiveHeight(5),
                backgroundColor: "brown",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="trash" size={responsiveWidth(5)} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </Animatable.View>
    </>
  );
}
