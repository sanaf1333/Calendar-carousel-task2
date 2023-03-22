import React, { useState, useEffect, startTransition } from 'react';
import { Button } from 'antd';
import DateCard from './date-card';
import { calculateNextMonth } from '../helpers/calculate-next';
import { calculatePrevMonth } from '../helpers/calculate-prev';
interface CardData {
  month: string;
  date: string;
  day: string;
  year: number;
}

interface Props {
  cards: CardData[];
}

const CardCarousel: React.FC<Props> = ({ cards }) => {

    let today: Date = new Date(); //set current selected date//default today
    const year= today.getFullYear();
        //shift this to function and recall with month and year. send it year and month and then return array
        //send current month and function
        const daysInMonth: number = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        //console.log(daysInMonth);
        const firstDayOfMonth: number = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
        //const firstDayOfMonth: number = new Date().getMonth();
        //console.log(firstDayOfMonth);
        let calendarDays: { month: string; date: string; day: string; year:number }[] = [];

        for (let i = 1; i <= daysInMonth; i++) {
            const day: string = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][((firstDayOfMonth + i - 1) % 7)];
            const month: string = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(today);
            calendarDays.push({ month, date: i.toString(), day, year });
        }

    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(2);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [daysss,setDaysss]=useState(calendarDays);
        //if limit reached, send current month and year to function, get next month and year or previous.
    // Find the index of today's date in the calendarDays array

    const todayIndex = cards.findIndex(card => card.date === today.getDate().toString());
  
    // Set startIndex and endIndex based on the index of today's date
    useEffect(() => {
      if (todayIndex >= 0) {
        setStartIndex(todayIndex);
        setEndIndex(todayIndex + 2);
      }
    }, [todayIndex]);
  
    const handleNext = () => {
        
        console.log(daysss);
        
        //endIndex === daysss.length+1 || endIndex===daysss.length 
        if(daysss.length - endIndex <= 3){
            console.log("next ",  daysss[startIndex].year);
            const nextMonthDays = calculateNextMonth(daysss[startIndex].month, daysss[startIndex].year);
            const newDays = [...daysss, ...nextMonthDays];
            setDaysss(newDays);
            //console.log(daysss);
        }

      if (endIndex < daysss.length - 1) {
        if(endIndex-startIndex < 2){
            setStartIndex(startIndex+2);
            setEndIndex(endIndex + 3);
        }
        else{
            setStartIndex(startIndex + 3);
            setEndIndex(endIndex + 3);
            
        }

        
        
        
        /*if (endIndex - startIndex === 2) {
            // Move to the next day in the same month
            setStartIndex(startIndex + 1);
            setEndIndex(endIndex + 1);
          } else if (currentMonth < 11) {
            // Move to the next month
            setCurrentMonth(currentMonth + 1);
            setStartIndex(endIndex + 1);
            setEndIndex(endIndex + 3);
          } else {
            // Move to the next year
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
            setStartIndex(endIndex + 1);
            setEndIndex(endIndex + 3);
          }*/
      }
    };
  
    const handlePrev = () => {
        console.log(startIndex);
        console.log(endIndex);
        if(startIndex <= 3){
            console.log("next ",  daysss[startIndex].year);
            const nextMonthDays = calculatePrevMonth(daysss[startIndex].month, daysss[startIndex].year);
            setStartIndex(startIndex+nextMonthDays.length);
            setEndIndex(endIndex+nextMonthDays.length);
            const newDays = [...nextMonthDays, ...daysss ];
            setDaysss(newDays);
            
            
            console.log(daysss);
        }

        if (startIndex > 0) {
          let newStartIndex = startIndex - 3;
          if (newStartIndex < 0) {
            newStartIndex = 0;
          }
          setStartIndex(newStartIndex);
          setEndIndex(endIndex - 3);
          
        }
      };
  
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
          <Button  onClick={handlePrev}>
            Previous
          </Button>
          <Button disabled={endIndex === daysss.length} onClick={handleNext}>
            Next
          </Button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {daysss.slice(startIndex, endIndex + 1).map((calendarDays, index) => (
            <DateCard key={index} {...calendarDays} />
          ))}
        </div>
      </>
    );
  };
  

export default CardCarousel;
