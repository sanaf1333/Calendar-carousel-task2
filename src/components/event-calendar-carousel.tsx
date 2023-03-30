import CollapsedCalendar from "@/components/collapse-calendar";
import AddEvent from "./add-event";
import { defaultProps } from "@/interfaces/card-style-default-props";
import { eventCalendarCarousel } from "@/interfaces/event-calendar-carousel-props";

const EventCalendarCarousel: React.FC<eventCalendarCarousel> = ({ selectedDate, cardStyle, cardsInRow, disabledDates, months, updateMonths, startIndex, handleSetStartIndex, endIndex, handleSetEndIndex,handleNavbarDateValue, setTime, setDuration, availableTimeSlots, onClickAddEvent, time, duration, handleTimeChange, handleDurationChange, formatDuration, handleCollapse, collapseActive }) => {
    const mergedCardStyle = {
        ...defaultProps,
        ...cardStyle,
    };

    
    return (
            <div data-testid="calendar-carousel">
                <CollapsedCalendar cardStyle={mergedCardStyle} cardsInRow={cardsInRow} disabledDates={disabledDates} selectedDate={selectedDate} months={months} updateMonths={updateMonths} startIndex={startIndex} handleSetStartIndex={handleSetStartIndex} endIndex={endIndex} handleSetEndIndex={handleSetEndIndex} handleNavbarDateValue={handleNavbarDateValue} availableTimeSlots={availableTimeSlots} setTime={setTime} setDuration={setDuration} handleCollapse={handleCollapse} collapseActive={collapseActive} />
                <AddEvent onClickAddEvent={onClickAddEvent} selectedDate={selectedDate} time={time} setTime={setTime} duration={duration} setDuration={setDuration} formatDuration={formatDuration} handleTimeChange={handleTimeChange} handleDurationChange={handleDurationChange} />
            </div>
    );
};

export default EventCalendarCarousel;