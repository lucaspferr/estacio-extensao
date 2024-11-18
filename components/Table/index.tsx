import React from "react";
import { Text, View } from "react-native";
import { TableProps } from "@/components/Table/types";
import styles from "@/components/Table/styles";
import { moodValueIntoString } from "@/utils/DataHandler";

const Table = ({ values }: TableProps) => {
  const formatDate = (stringDate: string): string => {
    try {
      const [year, month, day] = stringDate.split("-");
      const shortYear = year.slice(2);
      return `${day}/${month}/${shortYear}`;
    } catch (e) {
      return stringDate;
    }
  };
  return (
    <View>
      <View style={styles.mainStructure}>
        <View style={{ width: "40%" }}>
          <View style={[styles.columnLabel, styles.padding]}>
            <Text style={styles.mainText}>Data</Text>
          </View>
          {values.map((value, key) => (
            <Text key={key} style={[styles.valueText, styles.padding]}>
              {formatDate(value.date)}
            </Text>
          ))}
        </View>
        <View style={{ width: "60%" }}>
          <View style={[styles.columnLabel, styles.padding]}>
            <Text style={styles.mainText}>Valor</Text>
          </View>
          {values.map((value, key) => (
            <Text key={key} style={[styles.valueText, styles.padding]}>
              {moodValueIntoString(value.value)}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Table;
