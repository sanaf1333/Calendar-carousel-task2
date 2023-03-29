import React from 'react';
import { Collapse } from 'antd';
import CollapseHeader from './collapse-header';
import CardCarousel from './card-carousel';
import { DisabledDates } from '@/interfaces/disabled-dates-interface';
import { dateCardProps } from "@/interfaces/date-card-props-interface";
const { Panel } = Collapse;
interface Props {
    selectedDate: string;
    cardStyle?: dateCardProps;
    cardsInRow?: number;
    disabledDates?: DisabledDates[];
    months: any[];
    updateMonths: (updatedMonths: any[]) => void;
    startIndex: number;
    handleSetStartIndex: (value: number) => void;
    endIndex: number;
    handleSetEndIndex: (value: number) => void;
    handleNavbarDateValue: (value: string) => void;
    availableTimeSlots: { value: string, label: string }[];

}
const CollapsedCalendar: React.FC<Props> = ({ cardStyle, cardsInRow, disabledDates, selectedDate, months, updateMonths, startIndex, handleSetStartIndex, endIndex, handleSetEndIndex, handleNavbarDateValue, availableTimeSlots }) => (
    <div>
        <Collapse ghost>
            <Panel header={<CollapseHeader selectedDate={selectedDate} />} key="1" showArrow={false} >
                <CardCarousel onClickNavbarDate={handleNavbarDateValue} disabledDates={disabledDates} months={months} updateMonths={updateMonths} selectedDate={selectedDate} startIndex={startIndex} handleSetStartIndex={handleSetStartIndex} endIndex={endIndex} handleSetEndIndex={handleSetEndIndex} cardStyle={cardStyle} cardsInRow={cardsInRow} />
            </Panel>
        </Collapse>

    </div>
);

export default CollapsedCalendar;