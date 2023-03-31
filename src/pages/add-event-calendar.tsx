import React from "react";
import EventCalendarCarouselContainer from "@/containers/event-calendar-carousel-container";
import { eventCalendarCarouselAPIProps } from "@/types/event-calendar-carousel-API-props";
import { defaultDisabledDates } from "@/data/disabled-dates";
import { defaultTimeOptions } from "@/data/time-options";
const AddEventCalendar: React.FC<eventCalendarCarouselAPIProps> = ({ cardStyle, cardsInRow, disabledDates = defaultDisabledDates, availableTimeSlots = defaultTimeOptions, onClickAddEvent } ) => {
  return (
    <EventCalendarCarouselContainer cardStyle={cardStyle} cardsInRow={cardsInRow} disabledDates={disabledDates} availableTimeSlots={availableTimeSlots} onClickAddEvent={onClickAddEvent} />
  );
};

export default AddEventCalendar;
