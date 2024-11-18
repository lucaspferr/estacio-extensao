import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

const Button = ({
  title = "Button",
  onPress = () => {},
  backgroundColor = "#007BFF",
  textColor = "#FFF",
  disabled = false,
  loading = false,
  fontSize = 20,
  borderRadius = 8,
  paddingVertical = 16,
  paddingHorizontal = 20,
  icon = null, // Pass an icon component here if needed
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled || loading}
      style={[
        styles.button,
        {
          backgroundColor: disabled ? "#cccccc" : backgroundColor,
          borderRadius,
          paddingVertical,
          paddingHorizontal,
        },
      ]}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <>
          {icon && <>{icon}</>}
          <Text style={[styles.text, { color: textColor, fontSize }]}>
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
  },
});

export default Button;
