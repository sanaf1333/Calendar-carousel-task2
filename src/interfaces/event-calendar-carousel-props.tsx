import { dateCardProps } from "./date-card-props-interface";
import { DisabledDates } from "./disabled-dates-interface";
export interface eventCalendarCarousel{
    selectedDate: string;
    cardStyle?: dateCardProps;
    cardsInRow?: number;
    disabledDates?: DisabledDates[];
    months: any[];//type
    updateMonths: (updatedMonths: any[]) => void;//type
    startIndex: number;//variable name
    handleSetStartIndex: (value: number) => void;
    endIndex: number;
    handleSetEndIndex: (value: number) => void;
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
}