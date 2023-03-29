import { dateCardProps } from "./date-card-props-interface";
import { DisabledDates } from "./disabled-dates-interface";
export interface APIProps {
    cardStyle?: dateCardProps;
    cardsInRow?: number;
    disabledDates?: DisabledDates[];
    availableTimeSlots?: { value: string, label: string }[];
    onClickAddEvent?: (event: {time: string, duration: number, selectedDate: string }) => void;
}