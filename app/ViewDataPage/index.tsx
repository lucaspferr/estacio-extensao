import React, { useEffect, useRef } from "react";
import { ScrollView, Text, View } from "react-native";
import { captureRef } from "react-native-view-shot";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import Spinner from "@/components/Spinner";
import MoodIds from "@/constants/data/MoodIds";
import { getDataByMood, getDatesRecord } from "@/utils/DataHandler";
import { MoodDataType } from "@/utils/LocalDataType";
import Table from "@/components/Table";
import styles from "@/app/ViewDataPage/styles";
import Dropdown from "@/components/Dropdown";
import MoodChart from "@/components/MoodChart";
import { Stack } from "expo-router";
import { useDropdownContext } from "@/utils/DropdownContext";
import Button from "@/components/Button";

const ViewDataPage = () => {
  const { expandByType } = useDropdownContext();
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([{}] as MoodDataType[]);
  const [contentHeight, setContentHeight] = React.useState(0);
  const viewRef = useRef(null);

  const fetchData = async () => {
    if (!isLoading) return;
    const datesRecord = await getDatesRecord();
    const moodData = await Promise.all(MoodIds.map((id) => getDataByMood(id)));
    setData(moodData);
    setIsLoading(false);
  };

  const handleExportButton = async () => {
    try {
      expandByType("Table", true);
      expandByType("Graph", false);
      console.log("Preparando dados para exportação...");

      await new Promise((resolve) => setTimeout(resolve, 500));

      const uri = await captureRef(viewRef, {
        format: "png",
        quality: 0.8,
        result: "tmpfile",
      });

      console.log("Screenshot capturado:", uri);

      if (!(await Sharing.isAvailableAsync())) {
        alert("Compartilhamento não disponível neste dispositivo.");
        return;
      }

      await Sharing.shareAsync(uri, {
        mimeType: "image/png",
        dialogTitle: "Compartilhar dados",
      });

      console.log("Dados exportados com sucesso!");
    } catch (error) {
      console.error("Erro ao capturar screenshot:", error);
    }
  };

  useEffect(() => {
    if (isLoading) {
      fetchData();
    }
  }, [isLoading]);

  return (
    <View style={styles.container} ref={viewRef} collapsable={false}>
      <Stack.Screen
        options={{
          title: "Voltar a tela principal",
          headerStyle: {
            backgroundColor: "#E4DBCC",
          },
          headerTintColor: "#524e49",
        }}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <ScrollView
          onContentSizeChange={(width, height) => setContentHeight(height)}
        >
          <View
            style={[styles.gap, { minHeight: contentHeight }]}
            ref={viewRef}
            collapsable={false}
          >
            {data.map((moodData, key) => (
              <View key={key} style={styles.moodContainer}>
                <Text style={styles.moodLabel}>{moodData.label}</Text>
                <Dropdown label={"Gráfico"} type={"Graph"}>
                  <MoodChart values={moodData.values} />
                </Dropdown>
                <Dropdown label={"Tabela"} type={"Table"}>
                  <Table values={moodData.values} />
                </Dropdown>
              </View>
            ))}
            <Button
              title={"Exportar valores"}
              backgroundColor={"#E4DBCC"}
              textColor={"#76726E"}
              onPress={() => handleExportButton()}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default ViewDataPage;
