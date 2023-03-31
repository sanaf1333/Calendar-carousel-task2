import { dateCardStyleProps } from "./date-card-style-props";
import { DisabledDatesType } from "./disabled-dates-type";
import { monthsType } from "./months-type";
export interface eventCalendarProps{
    selectedDate: string;
    cardStyle?: dateCardStyleProps;
    cardsInRow?: number;
    disabledDates?: DisabledDatesType[];
    months: monthsType[];
    updateMonths: (updatedMonths: monthsType[]) => void;
    startIndexCardsDisplayed: number;//variable name
    handleSetStartIndexCardsDisplayed: (value: number) => void;
    endIndexCardsDisplayed: number;
    handleSetEndIndexCardsDisplayed: (value: number) => void;
    handleNavbarDateValue: (value: string) => void;
    setTime: (value: string) => void;
    setDuration: (value: number) => void;
    availableTimeSlots?: { value: string; label: string; disabled?: boolean }[];
    onClickAddEvent?: (event: { time: string, formattedDuration: string, selectedDate: string }) => void;
    time: string;
    duration: number;
    handleTimeChange: (value: string) => void;
    handleDurationChange: (value: number) => void;
    formatDuration: (value: number) => string;
    handleCollapse: () => void;
    collapseActive: boolean;
    onClickNavbarDate: (value: string) => void;    
}