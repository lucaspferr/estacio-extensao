import React from "react";
import { Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import styles from "./styles";
import TooltipModal from "@/components/TooltipModal";
import { MoodCardProps } from "@/components/MoodCard/types";
import { moodValueIntoString } from "@/utils/DataHandler";

const MoodCard = (props: MoodCardProps) => {
  const { item } = props;
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.emoji}>{item.emoji}</Text>
          <Text style={styles.moodLabel}>{item.moodLabel}</Text>
        </View>
        <TooltipModal tooltipText={item.tooltipText} />
      </View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={5}
        step={1}
        value={item.moodValue}
        onValueChange={props.onValueChange}
        minimumTrackTintColor="#4285F4"
        maximumTrackTintColor="#000000"
      />
      <Text style={styles.sliderValue}>
        {moodValueIntoString(item.moodValue)}
      </Text>
    </View>
  );
};

export default MoodCard;
