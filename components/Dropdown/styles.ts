import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#E4DBCC",
  },
  label: {
    fontSize: 20,
    color: "#524e49",
    fontWeight: "bold",
  },
  icon: {
    fontSize: 20,
    color: "#524e49",
  },
  content: { padding: 0 },
});

export default styles;
