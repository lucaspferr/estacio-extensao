import AsyncStorage from "@react-native-async-storage/async-storage";
import { DatesRecordType, MoodDataType } from "@/utils/LocalDataType";
import { MoodItem } from "@/components/MoodCard/types";

const updateDatesRecord = async (newDate: string): Promise<void> => {
  try {
    const storedData = await AsyncStorage.getItem("dates-record");
    const datesRecord: DatesRecordType = storedData
      ? JSON.parse(storedData)
      : { dates: [] };

    if (!datesRecord.dates.includes(newDate)) {
      datesRecord.dates.push(newDate);
    }

    await AsyncStorage.setItem("dates-record", JSON.stringify(datesRecord));
  } catch (e) {
    console.log("Error updating dates record:", e);
  }
};

const updateMoodData = async (
  id: string,
  label: string,
  newEntry: { date: string; value: number },
): Promise<void> => {
  try {
    const storedData = await AsyncStorage.getItem(id);
    const moodData: MoodDataType = storedData
      ? JSON.parse(storedData)
      : { id, label, values: [] };

    const dateExists = moodData.values.some(
      (entry) => entry.date === newEntry.date,
    );

    if (!dateExists) {
      moodData.values.push(newEntry);
    } else {
      moodData.values = moodData.values.map((entry) =>
        entry.date === newEntry.date
          ? { ...entry, value: newEntry.value }
          : entry,
      );
    }
    await AsyncStorage.setItem(id, JSON.stringify(moodData));
  } catch (e) {
    console.warn("Error updating mood data:", e);
  }
};

export const MoodCardDataHandlerThenUpdate = async (
  newMoodData: MoodItem[],
): Promise<boolean> => {
  const date = new Date().toISOString().split("T")[0];
  await updateDatesRecord(date);
  const updatePromises = newMoodData.map((item: MoodItem) => {
    return updateMoodData(item.id, item.moodLabel, {
      date: date,
      value: item.moodValue,
    });
  });
  await Promise.all(updatePromises);
  return true;
};

export const getDataByMood = async (id: string): Promise<MoodDataType> => {
  try {
    const storedData = await AsyncStorage.getItem(id);
    return storedData ? JSON.parse(storedData) : { id, label: "", values: [] };
  } catch (e) {
    console.warn("Error getting mood data:", e);
    return { id, label: "", values: [] };
  }
};

export const getDatesRecord = async (): Promise<DatesRecordType> => {
  try {
    const storedData = await AsyncStorage.getItem("dates-record");
    return storedData ? JSON.parse(storedData) : { dates: [] };
  } catch (e) {
    console.warn("Error getting dates record:", e);
    return { dates: [] };
  }
};

export const checkIfTodayHasRecord = async (): Promise<boolean> => {
  try {
    const storedData = await AsyncStorage.getItem("dates-record");
    if (!storedData) return false;

    const datesRecord: DatesRecordType = JSON.parse(storedData);
    if (!datesRecord.dates || datesRecord.dates.length === 0) return false;

    const sortedDates = datesRecord.dates.sort(
      (a, b) => new Date(b).getTime() - new Date(a).getTime(),
    );
    const mostRecentDate = sortedDates[0];

    const today = new Date().toISOString().split("T")[0];
    return mostRecentDate === today;
  } catch (e) {
    console.log("Error checking today's record:", e);
    return false;
  }
};

export const moodValueIntoString = (value: number): string => {
  switch (value) {
    case 0:
      return "Não senti/ Nada";
    case 1:
      return "Quase nada";
    case 2:
      return "Pouco";
    case 3:
      return "Dentro do normal";
    case 4:
      return "Mais que o normal";
    case 5:
      return "Bastante";
    default:
      return "";
  }
};
