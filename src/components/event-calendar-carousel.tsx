import CollapsedCalendar from "@/components/collapse-calendar";
import AddEvent from "./add-event";
import { defaultProps } from "@/types/card-style-default-props";
import { eventCalendarProps } from "@/types/event-calendar-props";

type eventCalendarCarouselProps = Omit<eventCalendarProps, "onClickNavbarDate">;

const EventCalendarCarousel: React.FC<eventCalendarCarouselProps> = ({ selectedDate, cardStyle, cardsInRow, disabledDates, months, updateMonths, startIndexCardsDisplayed, handleSetStartIndexCardsDisplayed, endIndexCardsDisplayed, handleSetEndIndexCardsDisplayed, handleNavbarDateValue, setTime, setDuration, availableTimeSlots, onClickAddEvent, time, duration, handleTimeChange, handleDurationChange, formatDuration, handleCollapse, collapseActive }) => {
    const mergedCardStyle = {
        ...defaultProps,
        ...cardStyle,
    };

    return (
        <div>
            <CollapsedCalendar cardStyle={mergedCardStyle} cardsInRow={cardsInRow} disabledDates={disabledDates} selectedDate={selectedDate} months={months} updateMonths={updateMonths} startIndexCardsDisplayed={startIndexCardsDisplayed} handleSetStartIndexCardsDisplayed={handleSetStartIndexCardsDisplayed} endIndexCardsDisplayed={endIndexCardsDisplayed} handleSetEndIndexCardsDisplayed={handleSetEndIndexCardsDisplayed} handleNavbarDateValue={handleNavbarDateValue} availableTimeSlots={availableTimeSlots} setTime={setTime} setDuration={setDuration} handleCollapse={handleCollapse} collapseActive={collapseActive} />
            <AddEvent onClickAddEvent={onClickAddEvent} selectedDate={selectedDate} time={time} setTime={setTime} duration={duration} setDuration={setDuration} formatDuration={formatDuration} handleTimeChange={handleTimeChange} handleDurationChange={handleDurationChange} />
        </div>
    );
};

export default EventCalendarCarousel;