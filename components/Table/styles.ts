import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainStructure: {
    flexDirection: "row",
    marginTop: 16,
  },
  column: {
    width: "50%",
  },
  columnLabel: {
    backgroundColor: "#4285F4",
    borderBottomWidth: 1,
    borderBottomColor: "#1A3D75",
  },
  padding: {
    paddingHorizontal: 8,
    paddingTop: 4,
  },
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F5F5F5",
  },
  valueText: {
    fontSize: 18,
    backgroundColor: "#E1E9FD",
  },
});

export default styles;
