import React from 'react';
import { Collapse, Layout } from 'antd';
import Navbar from './navbar';
const { Panel } = Collapse;
import AddEvent from './add-event';
import { holidays } from '@/data/holidays';
import CardCarousel from './card-carousel';

interface DisabledDates {
    name: string;
    date: string;
    month: string;
    year: number;
}
interface dateCardProps {
    headerColor?: string;
    monthColor?: string;
    dayColor?: string;
    dateColor?: string;
    cardBackgroundColor?: string;
    cardWidth?: number;
    disabledColor?: string;
    selectedBorder?: string;
}
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
  }
const CollapsedCalendar: React.FC<Props> = ({ cardStyle, cardsInRow, disabledDates, selectedDate, months, updateMonths, startIndex, handleSetStartIndex, endIndex, handleSetEndIndex, handleNavbarDateValue }) => (
    <div>
    <Collapse ghost>
      <Panel header={<Navbar selectedDate={selectedDate} />} key="1" showArrow={false} >
        <CardCarousel onClickNavbarDate={handleNavbarDateValue} disabledDates={disabledDates} months={months} updateMonths={updateMonths} selectedDate={selectedDate} startIndex={startIndex} handleSetStartIndex={handleSetStartIndex} endIndex={endIndex} handleSetEndIndex={handleSetEndIndex} cardStyle={cardStyle} cardsInRow={cardsInRow} />
      </Panel>
    </Collapse>
    <AddEvent/>
    </div>
  );
  
  export default CollapsedCalendar;