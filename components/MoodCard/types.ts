export interface MoodItem {
    id: string;
    moodLabel: string;
    emoji: string;
    moodValue: number;
    tooltipText: string;
}

export interface MoodCardProps {
    item: MoodItem;
    onValueChange: (value: number) => void;
}
