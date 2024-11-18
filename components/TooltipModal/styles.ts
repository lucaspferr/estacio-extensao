import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tooltipContainer: {
    position: "absolute",
    top: 2,
    right: 0,
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#4285F4",
  },
  tooltipIcon: {
    fontSize: 16,
    color: "#4285F4",
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4285F4",
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
  },
});

export default styles;
