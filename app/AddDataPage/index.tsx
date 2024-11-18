import React, { useState } from "react";
import MoodData from "@/constants/data/MoodData";
import styles from "./styles";
import { ScrollView, Text, View } from "react-native";
import MoodCard from "@/components/MoodCard";
import { Stack, useRouter } from "expo-router";
import Button from "@/components/Button";
import { MoodCardDataHandlerThenUpdate } from "@/utils/DataHandler";

const AddDataPage = () => {
  const [moodData, setMoodData] = useState(MoodData);
  const [moodDataUpdated, setMoodDataUpdated] = useState(false);
  const router = useRouter();

  const handleSliderChange = (index: number, newValue: number) => {
    const updatedMoodData = [...moodData];
    updatedMoodData[index].moodValue = newValue;
    setMoodData(updatedMoodData);
  };

  const handleRegisterDay = async () => {
    const updated = await MoodCardDataHandlerThenUpdate(moodData);
    setMoodDataUpdated(updated);

    if (updated) {
      router.push("/");
    }
  };

  return (
    <View>
      <Stack.Screen
        options={{
          title: "Voltar a tela principal",
          headerStyle: {
            backgroundColor: "#E4DBCC",
          },
          headerTintColor: "#524e49",
        }}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          Ao longo dele, o quão forte/frequente você sentiu ____ ?
        </Text>
        {MoodData.map((item, index) => (
          <MoodCard
            key={item.id}
            item={item}
            onValueChange={(newValue) => handleSliderChange(index, newValue)}
          />
        ))}
        {!moodDataUpdated && (
          <View style={styles.button}>
            <Button
              title="Registrar dia"
              onPress={handleRegisterDay}
              backgroundColor={"#E4DBCC"}
              textColor={"#76726E"}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default AddDataPage;
