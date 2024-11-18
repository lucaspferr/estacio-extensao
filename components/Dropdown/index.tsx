import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDropdownContext } from "@/utils/DropdownContext";
import { DropdownProps } from "@/components/Dropdown/types";
import styles from "@/components/Dropdown/styles";

const Dropdown = ({ label, type, children }: DropdownProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { expandedTypes } = useDropdownContext();

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    if (type in expandedTypes) {
      setIsVisible(expandedTypes[type]);
    }
  }, [expandedTypes, type]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggleVisibility}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.icon}>{isVisible ? "▲" : "▼"}</Text>
      </TouchableOpacity>
      {isVisible && <View style={styles.content}>{children}</View>}
    </View>
  );
};

export default Dropdown;
