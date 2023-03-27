import { useState, useEffect } from 'react';
import { calculateNextMonth } from '../helpers/calculate-next';
import { calculatePrevMonth } from '../helpers/calculate-prev';
import { searchDropdownDate } from '../helpers/search-dropdown-date';
interface UseCarouselProps {
  startIndex: number;
  endIndex: number;
  handleSetStartIndex: (value: number) => void;
  handleSetEndIndex: (value: number) => void;
  months: any[];
  updateMonths: (updatedMonths: any[]) => void;
  selectedDropdown: string;
    dropdownChanged: boolean;
    handleSetDropdownChanged: (value: boolean)=>void;
    onClickNavbarDate: (value: string) => void;
}

const useCarousel = ({
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
}: UseCarouselProps) => {
  
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
      const nextMonthDays = calculateNextMonth(
        months[startIndex].month,
        months[startIndex].year
      );
      const newDays = [...months, ...nextMonthDays];
      updateMonths(newDays);
    }

    if (endIndex < months.length - 1) {
      if (endIndex - startIndex < 2) {
        handleSetStartIndex(startIndex + 2);
        handleSetEndIndex(endIndex + 3);
      } else {
        handleSetStartIndex(startIndex + 3);
        handleSetEndIndex(endIndex + 3);
      }
    }
  };

  const handlePrev = () => {
    let newStartIndex = startIndex;
    let newEndIndex = endIndex;
    if (startIndex <= 3) {
      const prevMonthDays = calculatePrevMonth(
        months[startIndex].month,
        months[startIndex].year
      );
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
  return {
    handleNext,
    handlePrev,
  };
};

export default useCarousel;
