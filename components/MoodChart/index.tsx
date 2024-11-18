import { LineChart } from "react-native-gifted-charts";
import { CurveType } from "gifted-charts-core";
import { ValuesType } from "@/utils/LocalDataType";
import { View } from "react-native";

interface ChartProps {
  values: ValuesType[];
}
const MoodChart = ({ values }: ChartProps) => {
  const handleDate = (stringDate: string): string => {
    try {
      const [year, month, day] = stringDate.split("-");
      return `${day}/${month}`;
    } catch (e) {
      return stringDate;
    }
  };
  const formatDataValues = (
    v: ValuesType[],
  ): { value: number; label: string; showXAxisIndex: boolean }[] => {
    return v.map((item, index) => {
      const formattedDate = handleDate(item.date);

      return {
        value: item.value,
        label: formattedDate,
        showXAxisIndex:
          index === 0 || index === values.length - 1 || item.value > 0,
      };
    });
  };

  const data = formatDataValues(values);

  return (
    <View style={{ paddingHorizontal: 8, marginTop: 32 }}>
      <LineChart
        data={data}
        maxValue={5}
        stepValue={1}
        thickness={3}
        color={"#4285F4"}
        dataPointsColor={"#4285F4"}
        spacing={70}
        curved={true}
        curveType={CurveType.CUBIC}
        curvature={0.2}
        noOfSectionsBelowXAxis={0.5}
        xAxisColor={"#1A3D75"}
        yAxisColor={"#1A3D75"}
        xAxisIndicesHeight={0}
        xAxisThickness={3}
        yAxisThickness={3}
        hideRules={true}
        showVerticalLines={true}
      />
    </View>
  );
};

export default MoodChart;
