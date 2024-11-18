import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#FFFBF9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  infoContainer: {
    minWidth: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  textContainer: {
    flexDirection: "row",
    gap: 16,
  },
  emoji: {
    fontSize: 32,
    textAlign: "center",
  },
  moodLabel: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
  },
  chosenValue: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 4,
  },
  slider: {
    width: "100%",
    height: 40,
    marginTop: 16,
  },
  sliderValue: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
  },
});

export default styles;
