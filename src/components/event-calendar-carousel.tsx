import { useState } from "react";
import { defaultDisabledDates } from "@/data/disabled-dates";
import { calculateMonth } from "@/helpers/calculate-month";
import CollapsedCalendar from "@/components/collapse-calendar";
import { APIProps } from "@/interfaces/API-props";
import { dateCardProps } from "@/interfaces/date-card-props-interface";
import { defaultTimeOptions } from "@/data/time-options";
import AddEvent from "./add-event";
const defaultProps: dateCardProps = {
    headerColor: '#eb4c34',
    monthColor: 'white',
    dayColor: 'gray',
    dateColor: 'gray',
    cardBackgroundColor: 'white',
    cardWidth: 150,
    disabledColor: 'gray',
    selectedBorder: '1px solid gray',
};

const EventCalendarCarousel: React.FC<APIProps> = ({ cardStyle, cardsInRow, disabledDates = defaultDisabledDates, availableTimeSlots = defaultTimeOptions, onClickAddEvent }) => {
    const mergedCardStyle = {
        ...defaultProps,
        ...cardStyle,
    };

    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(2);
    function handleSetStartIndex(value: number) {
        setStartIndex(value);
    }
    function handleSetEndIndex(value: number) {
        setEndIndex(value);
    }
    let calendarDays = calculateMonth();
    const [months, setMonths] = useState(calendarDays);
    function updateMonths(months: []) {
        setMonths(months);
    }
    const [selectedDate, setSelectedDate] = useState<string>("Today");
    function handleNavbarDateValue(value: string) {
        setSelectedDate(value);
    }

    return (
        <>
            <div data-testid="calendar-carousel">
                <CollapsedCalendar cardStyle={mergedCardStyle} cardsInRow={cardsInRow} disabledDates={disabledDates} selectedDate={selectedDate} months={months} updateMonths={updateMonths} startIndex={startIndex} handleSetStartIndex={handleSetStartIndex} endIndex={endIndex} handleSetEndIndex={handleSetEndIndex} handleNavbarDateValue={handleNavbarDateValue} availableTimeSlots={availableTimeSlots} />
                <AddEvent onClickAddEvent={onClickAddEvent} />
            </div>
        </>
    );
};

export default EventCalendarCarousel;