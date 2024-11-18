export interface DatesRecordType {
  dates: string[];
}

export interface ValuesType {
  date: string;
  value: number;
}

export interface MoodDataType {
  id: string;
  label: string;
  values: ValuesType[];
}
