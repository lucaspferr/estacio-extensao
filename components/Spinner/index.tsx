import { SpinnerProps } from "@/components/Spinner/types";
import styles from "@/components/Spinner/styles";
import { ActivityIndicator, View } from "react-native";

const Spinner = (props: SpinnerProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={props.size || "large"} color="#4285F4" />
    </View>
  );
};

export default Spinner;
