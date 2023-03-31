import React from 'react';
import { Collapse } from 'antd';
import CollapseHeader from './collapse-header';
import CardCarousel from './card-carousel';
import { defaultTimeOptions } from '@/data/time-options';
import { eventCalendarProps } from '@/types/event-calendar-props';
const { Panel } = Collapse;

type collapsedCalendarProps = Omit<eventCalendarProps, "onClickAddEvent" | "time" | "duration" | "handleTimeChange" | "handleDurationChange" | "formatDuration" | "onClickNavbarDate">;
const CollapsedCalendar: React.FC<collapsedCalendarProps> = ({ cardStyle, cardsInRow, disabledDates, selectedDate, months, updateMonths, startIndexCardsDisplayed, handleSetStartIndexCardsDisplayed, endIndexCardsDisplayed, handleSetEndIndexCardsDisplayed, handleNavbarDateValue, availableTimeSlots = defaultTimeOptions, setTime, setDuration, handleCollapse, collapseActive }) => {

    return (
        <div data-testid="collapsed-calendar" >
            <Collapse ghost activeKey={collapseActive ? '1' : undefined}>
                <Panel header={<CollapseHeader selectedDate={selectedDate} handleCollapse={handleCollapse} />} key="1" showArrow={false}  >
                    <CardCarousel onClickNavbarDate={handleNavbarDateValue} disabledDates={disabledDates} months={months} updateMonths={updateMonths} selectedDate={selectedDate} startIndexCardsDisplayed={startIndexCardsDisplayed} handleSetStartIndexCardsDisplayed={handleSetStartIndexCardsDisplayed} endIndexCardsDisplayed={endIndexCardsDisplayed} handleSetEndIndexCardsDisplayed={handleSetEndIndexCardsDisplayed} cardStyle={cardStyle} cardsInRow={cardsInRow} handleCollapse={handleCollapse} setTime={setTime} setDuration={setDuration} availableTimeSlots={availableTimeSlots} />
                </Panel>
            </Collapse>
        </div>
    );
};

export default CollapsedCalendar;