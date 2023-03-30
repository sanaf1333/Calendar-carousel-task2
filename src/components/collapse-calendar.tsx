import React, {useState} from 'react';
import { Button, Collapse } from 'antd';
import CollapseHeader from './collapse-header';
import CardCarousel from './card-carousel';
import { DisabledDates } from '@/interfaces/disabled-dates-interface';
import { dateCardProps } from "@/interfaces/date-card-props-interface";
import { defaultTimeOptions } from '@/data/time-options';
const { Panel } = Collapse;
interface Props {//names //collapsedcalendarprops collapsedcalendartpes icollapsedcalendar
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
    availableTimeSlots?: { value: string, label: string, disabled?: boolean }[];
    setTime: (value: string) => void;
    setDuration: (value: number) => void;
    handleCollapse: () => void;
    collapseActive: boolean;
}
const CollapsedCalendar: React.FC<Props> = ({ cardStyle, cardsInRow, disabledDates, selectedDate, months, updateMonths, startIndex, handleSetStartIndex, endIndex, handleSetEndIndex, handleNavbarDateValue, availableTimeSlots=defaultTimeOptions, setTime, setDuration, handleCollapse, collapseActive }) => {
    
    return (
        <div data-testid="collapsed-calendar" >
            <Collapse ghost activeKey={collapseActive ? '1' : undefined}>
                <Panel header={<CollapseHeader selectedDate={selectedDate} handleCollapse={handleCollapse} />} key="1" showArrow={false}  >
                    <CardCarousel onClickNavbarDate={handleNavbarDateValue} disabledDates={disabledDates} months={months} updateMonths={updateMonths} selectedDate={selectedDate} startIndex={startIndex} handleSetStartIndex={handleSetStartIndex} endIndex={endIndex} handleSetEndIndex={handleSetEndIndex} cardStyle={cardStyle} cardsInRow={cardsInRow} handleCollapse={handleCollapse} setTime={setTime} setDuration={setDuration} availableTimeSlots={availableTimeSlots} />
                </Panel>
            </Collapse>
        </div>
    );
};

export default CollapsedCalendar;