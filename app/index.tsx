import React, { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
import Button from "@/components/Button";
import { LinearGradient } from "expo-linear-gradient";
import { checkIfTodayHasRecord } from "@/utils/DataHandler";

const Home = () => {
  const timeGreeting = () => {
    const time = new Date();
    let greetingText;
    if (time.getHours() > 18 || time.getHours() < 4) {
      greetingText = "boa noite!";
    } else if (time.getHours() > 12) {
      greetingText = "boa tarde!";
    } else {
      greetingText = "bom dia!";
    }
    return `Olá, ${greetingText}\n Como você está hoje?`;
  };

  const [isAddDisabled, setIsAddDisabled] = useState(false);
  const [addLabel, setAddLabel] = useState("Adicionar registro");
  const checkTodayRecord = async () => {
    const hasRecord = await checkIfTodayHasRecord();
    if (hasRecord) {
      setAddLabel("Registro já adicionado");
    } else {
      setAddLabel("Adicionar registro");
    }
    setIsAddDisabled(hasRecord);
  };

  useEffect(() => {
    checkTodayRecord();
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/pexels-pixabay-355863.jpg")}
          style={styles.image}
        />
        <LinearGradient
          colors={["white", "transparent"]}
          style={styles.gradient}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>{timeGreeting()}</Text>
        <Link href={{ pathname: "/AddDataPage" }} asChild>
          <Button
            title={addLabel}
            backgroundColor={"#E4DBCC"}
            textColor={"#76726E"}
            disabled={isAddDisabled}
          />
        </Link>
        <Link href={{ pathname: "/ViewDataPage" }} asChild>
          <Button
            title={"Ver progesso"}
            backgroundColor={"#E4DBCC"}
            textColor={"#76726E"}
          />
        </Link>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    backgroundColor: "#FFFBF9",
  },
  imageContainer: {
    position: "relative",
    height: "30%",
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 16,
    gap: 36,
  },
  text: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#76726E",
  },
});
