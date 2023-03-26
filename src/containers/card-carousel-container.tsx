import React, { useState, useEffect} from 'react';
import { calculateNextMonth } from '../helpers/calculate-next';
import { calculatePrevMonth } from '../helpers/calculate-prev';
import { holidays } from '../data/holidays';
import { searchDropdownDate } from '../helpers/search-dropdown-date';
import CardCarousel from '../components/card-carousel';
interface Holiday {
    name: string;
    date: string;
    month: string;
    year: number;
  }
interface Props {
    onClickNavbarDate: (value: string) => void;
    holiday?: Holiday[];
    months: any[];
    updateMonths: (updatedMonths: any[]) => void;
    selectedDate: string;
    selectedDropdown: string;
    dropdownChanged: boolean;
    handleSetDropdownChanged: (value: boolean)=>void;
    startIndex: number;
    handleSetStartIndex: (value: number) => void;
    endIndex: number;
    handleSetEndIndex: (value: number) => void;
}

const CardCarouselContainer: React.FC<Props> = ({ onClickNavbarDate, months, updateMonths, selectedDate, selectedDropdown, dropdownChanged, handleSetDropdownChanged, startIndex,handleSetStartIndex, endIndex, handleSetEndIndex }) => {
    
    const [selectedCard, setSelectedCard] = useState(-1);
    const [showAddEvent, setShowAddEvent] = useState(false);
    
    
    const variants = {
        hidden: { y: 100, opacity: 0, transition: { duration: 1 } },
        visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    };


    const handleCardClick = (index: number) => {
        setShowAddEvent(true);
        setSelectedCard(index);
    };

    const handleAddEvent = () => {
        setShowAddEvent(false);
    };
    
    let today: Date = new Date();
    const todayIndex = months.findIndex(card => card.date === today.getDate().toString());
    useEffect(() => {
        if (todayIndex >= 0) {
            handleSetStartIndex(todayIndex);
            handleSetEndIndex(todayIndex + 2);
        }
    }, [todayIndex]);

    const handleNext = () => {
        if (months.length - endIndex <= 3) {
            const nextMonthDays = calculateNextMonth(months[startIndex].month, months[startIndex].year);
            const newDays = [...months, ...nextMonthDays];
            updateMonths(newDays);
        }

        if (endIndex < months.length - 1) {
            if (endIndex - startIndex < 2) {
                handleSetStartIndex(startIndex + 2);
                handleSetEndIndex(endIndex + 3);
            }
            else {
                handleSetStartIndex(startIndex + 3);
                handleSetEndIndex(endIndex + 3);

            }
        }
    };
    const handlePrev = () => {
        let newStartIndex = startIndex;
        let newEndIndex = endIndex;
        if (startIndex <= 3) {
            const prevMonthDays = calculatePrevMonth(months[startIndex].month, months[startIndex].year);
            const newDays = [...prevMonthDays, ...months];
            updateMonths(newDays);
            newStartIndex = startIndex + prevMonthDays.length - 3;
            newEndIndex = endIndex + prevMonthDays.length - 3;
        } else {
            newStartIndex = startIndex - 3;
            newEndIndex = endIndex - 3;
        }
        handleSetStartIndex(newStartIndex);
        handleSetEndIndex(newEndIndex);
    };
    
    useEffect(() => {
        if (dropdownChanged) {
            let newStartIndex=searchDropdownDate(months, selectedDropdown);
            handleSetStartIndex(newStartIndex);
            handleSetEndIndex(newStartIndex+2);
            handleSetDropdownChanged(false);
            onClickNavbarDate(selectedDropdown);
        }
      }, [dropdownChanged]);
    return (
        <>
            <CardCarousel onClickNavbarDate={onClickNavbarDate} holiday={holidays} months={months} selectedDate={selectedDate} startIndex={startIndex} endIndex={endIndex} showAddEvent={showAddEvent} variants={variants} handleAddEvent={handleAddEvent} handlePrev={handlePrev} handleCardClick={handleCardClick} handleNext={handleNext} selectedCard={selectedCard}  />
        </>

    );
};


export default CardCarouselContainer;
