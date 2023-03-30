import { useState } from "react";
import { defaultDisabledDates } from "@/data/disabled-dates";
import { calculateMonth } from "@/helpers/calculate-month";
import CollapsedCalendar from "@/components/collapse-calendar";
import { APIProps } from "@/interfaces/API-props";
import { defaultTimeOptions } from "@/data/time-options";
import AddEvent from "@/components/add-event";
import { defaultProps } from "@/interfaces/card-style-default-props";
import EventCalendarCarousel from "@/components/event-calendar-carousel";
const EventCalendarCarouselContainer: React.FC<APIProps> = ({ cardStyle, cardsInRow, disabledDates = defaultDisabledDates, availableTimeSlots = defaultTimeOptions, onClickAddEvent }) => {
    const mergedCardStyle = {
        ...defaultProps,
        ...cardStyle,
    };
    const [collapseActive, setCollapseActive] = useState(false);

    const handleCollapse = () => {
        //setTime(availableTimeSlots[0].value);
        //setDuration(0);
        setCollapseActive(!collapseActive);
    };
    const [startIndex, setStartIndex] = useState(0);//variable names
    const [endIndex, setEndIndex] = useState(2);
    const [duration, setDuration] = useState(0);
    const [time, setTime] = useState(availableTimeSlots[0].value);
    const formatDuration = (duration: number): string => {
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    
    const handleDurationChange = (amount: number) => {
        collapseActive && handleCollapse();
        setDuration(prevDuration => {
            const newDuration = prevDuration + amount * 60;
            return Math.max(newDuration, 0);
        });
    };

    const handleTimeChange = (e: string) => {
        collapseActive && handleCollapse();
        setTime(e);
    }
    function handleSetStartIndex(value: number) {
        setStartIndex(value);
    }
    function handleSetEndIndex(value: number) {
        setEndIndex(value);
    }
    let calendarDays = calculateMonth();//const
    const [months, setMonths] = useState(calendarDays);
    function updateMonths(months: []) {
        setMonths(months);
    }
    const [selectedDate, setSelectedDate] = useState<string>("Today");
    function handleNavbarDateValue(value: string) {
        setSelectedDate(value);
    }
    onClickAddEvent = (event: { time: string, formattedDuration: string, selectedDate: string }) => {
        console.log(event);
        return event;
    }
    return (
            <div data-testid="calendar-carousel">
                <EventCalendarCarousel selectedDate={selectedDate} cardStyle={mergedCardStyle} cardsInRow={cardsInRow} disabledDates={disabledDates} months={months} updateMonths={updateMonths} startIndex={startIndex} handleSetStartIndex={handleSetStartIndex} endIndex={endIndex} handleSetEndIndex={handleSetEndIndex} handleNavbarDateValue={handleNavbarDateValue} setTime={setTime} setDuration={setDuration} availableTimeSlots={availableTimeSlots} onClickAddEvent={onClickAddEvent} time={time} duration={duration} handleTimeChange={handleTimeChange} handleDurationChange={handleDurationChange} formatDuration={formatDuration} handleCollapse={handleCollapse} collapseActive={collapseActive} />
            </div>
    );
};

export default EventCalendarCarouselContainer;


