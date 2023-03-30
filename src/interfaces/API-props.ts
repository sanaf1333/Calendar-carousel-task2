import { dateCardProps } from "./date-card-props-interface";
import { DisabledDates } from "./disabled-dates-interface";
//name
export interface APIProps {
    cardStyle?: dateCardProps;
    cardsInRow?: number;
    disabledDates?: DisabledDates[];
    availableTimeSlots?: { value: string, label: string, disabled?: boolean }[];
    onClickAddEvent?: (event: {time: string, formattedDuration: string, selectedDate: string }) => void;
}