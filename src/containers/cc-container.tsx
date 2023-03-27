import useCarousel from '../hooks/use-card-carousel';
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

const CardCarouselContainer = ({ onClickNavbarDate, holiday, months, updateMonths, selectedDate, selectedDropdown, dropdownChanged, handleSetDropdownChanged, startIndex,handleSetStartIndex, endIndex, handleSetEndIndex }) => {
    const [selectedCard, setSelectedCard] = useState(-1);
  const [showAddEvent, setShowAddEvent] = useState(false);

  const handleCardClick = (index: number) => {
    setShowAddEvent(true);
    setSelectedCard(index);
  };

  const handleAddEvent = () => {
    setShowAddEvent(false);
  };

    const variants = {
        hidden: { y: 100, opacity: 0, transition: { duration: 1 } },
        visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    };
    const {  
      handleNext, 
      handlePrev, 
    } = useCarousel({
      startIndex,
      endIndex,
      handleSetStartIndex,
      handleSetEndIndex,
      months,
      updateMonths,
      selectedDropdown, 
      dropdownChanged, 
  handleSetDropdownChanged,
  onClickNavbarDate
    });
  
  
    return (
      <CardCarousel
        months={months}
        holiday={holidays}
        selectedCard={selectedCard}
        showAddEvent={showAddEvent}
        handleCardClick={handleCardClick}
        handleAddEvent={handleAddEvent}
        handleNext={handleNext}
        handlePrev={handlePrev}
        onClickNavbarDate={onClickNavbarDate}
        selectedDate={selectedDate} 
        startIndex={startIndex} 
        endIndex={endIndex} 
        variants={variants}
      />
    );
  };
  
  export default CardCarouselContainer;