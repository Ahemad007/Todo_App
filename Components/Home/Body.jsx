import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { FlatList, Keyboard, Text } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import Card from "./Card";
import Headers from "./Headers";
import * as Animatable from "react-native-animatable";

export default function Body() {
  const [checkedTasks, setCheckedTasks] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const tasks = await AsyncStorage.getItem("my-todo");
        if (tasks !== null) {
          setTasks(JSON.parse(tasks));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTasks();
  }, []);
  const handleTask = async (task) => {
    try {
      const newTask = {
        id: Date.now(),
        title: task,
        isDone: false,
      };
      setTasks([...tasks, newTask]);
      await AsyncStorage.setItem(
        "my-todo",
        JSON.stringify([...tasks, newTask])
      );
      Keyboard.dismiss();
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async (id) => {
    try {
      const updatedTasks = tasks.filter((task) => task.id !== id);
      await AsyncStorage.setItem("my-todo", JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDone = async (id) => {
    try {
      const updatedTask = tasks.map((task) => {
        if (task.id === id) {
          task.isDone = !task.isDone;
        }
        return task;
      });
      await AsyncStorage.setItem("my-todo", JSON.stringify(updatedTask));
      setTasks(updatedTask);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.isDone === true);
    setCheckedTasks(completedTasks.length);
  }, [tasks]);
  const totalTask = tasks.length;

  const emptyComponent = () => (
    <Animatable.Text
      animation="slideInUp"
      style={{
        fontSize: responsiveFontSize(2.5),
      }}
      className="text-center font-outfitbold text-sky-800"
    >
      No tasks available
    </Animatable.Text>
  );
  return (
    <>
      <Headers
        totalTask={totalTask}
        onAddTask={handleTask}
        checkedTasks={checkedTasks}
      />
      <FlatList
        data={tasks}
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: 20,
          marginLeft: 25,
          marginRight: 25,
        }}
        ListEmptyComponent={emptyComponent}
        renderItem={({ item }) => (
          <Card item={item} onDelete={onDelete} handleDone={handleDone} />
        )}
      />
    </>
  );
}
