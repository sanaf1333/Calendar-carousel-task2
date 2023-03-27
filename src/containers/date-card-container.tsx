import { Card} from 'antd';
import React from 'react';
import DateCard from '../components/date-card';
interface Holiday {
    name: string;
    date: string;
    month: string;
    year: number;
  }
  interface dateCardProps{
    headerColor?: string;
    monthColor?: string;
    dayColor?: string;
    dateColor?:string;
    cardBackgroundColor?: string;
    cardWidth?: number;
    disabledColor?: string;
    selectedBorder?: string;
  }
interface Props {
    month: string;
    date: string;
    day: string;
    year: number;
    onClick: (index:number) => void;
    onClickNavbarDate: (value: string) => void;
    selected: boolean;
    index: number;
    holiday?: Holiday[];
    selectedDate: string;
    cardStyle?: dateCardProps;
}

const DateCardContainer: React.FC<Props> = ({month, date, day, year, onClick, onClickNavbarDate, selected, index, holiday, selectedDate, cardStyle}) => {

    
      let dateInput=`${month} ${date}, ${year}`;
      const today=new Date();
      const monthString: string = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(today);
      if(`${monthString} ${today.getDate()}, ${today.getFullYear()}`===dateInput){
        dateInput=`Today`;
      }
      const isHoliday = holiday?.some(h => h.date === date && h.month === month && h.year === year);
      function handleCardClick(index: number) {
        if (!isHoliday){
            onClickNavbarDate(`${month} ${date}, ${year}`);
            onClick(index);
        }       
      }
    return (
        <DateCard month={month} date={date} day={day} index={index} selectedDate={selectedDate} isHoliday={isHoliday} dateInput={dateInput} handleCardClick={handleCardClick} cardStyle={cardStyle} />
    );


};

export default DateCardContainer;