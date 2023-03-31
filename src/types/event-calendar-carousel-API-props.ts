import { dateCardStyleProps } from "./date-card-style-props";
import { DisabledDatesType } from "./disabled-dates-type";
//name
export interface eventCalendarCarouselAPIProps {
    cardStyle?: dateCardStyleProps;
    cardsInRow?: number;
    disabledDates?: DisabledDatesType[];
    availableTimeSlots?: { value: string, label: string, disabled?: boolean }[];
    onClickAddEvent?: (event: {time: string, formattedDuration: string, selectedDate: string }) => void;
}