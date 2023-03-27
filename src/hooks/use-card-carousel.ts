import { useEffect } from 'react';
import { calculateNextMonth } from '@/helpers/calculate-next';
import { calculatePrevMonth } from '@/helpers/calculate-prev';
import { searchDropdownDate } from '@/helpers/search-dropdown-date';
interface UseCarouselProps {
  startIndex: number;
  endIndex: number;
  handleSetStartIndex: (value: number) => void;
  handleSetEndIndex: (value: number) => void;
  months: any[];
  updateMonths: (updatedMonths: any[]) => void;
  selectedDropdown: string;
  dropdownChanged: boolean;
  handleSetDropdownChanged: (value: boolean) => void;
  onClickNavbarDate: (value: string) => void;
  cardsInRow?: number;
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
  onClickNavbarDate,
  cardsInRow = 3,
}: UseCarouselProps) => {

  let today: Date = new Date();
  const todayIndex = months.findIndex(card => card.date === today.getDate().toString());
  useEffect(() => {
    if (todayIndex >= 0) {
      handleSetStartIndex(todayIndex);
      handleSetEndIndex(todayIndex + cardsInRow - 1);
    }
  }, [todayIndex]);

  const handleNext = () => {
    if (months.length - endIndex <= cardsInRow) {
      const nextMonthDays = calculateNextMonth(
        months[startIndex].month,
        months[startIndex].year
      );
      const newDays = [...months, ...nextMonthDays];
      updateMonths(newDays);
    }

    if (endIndex < months.length - 1) {
      if (endIndex - startIndex < cardsInRow - 1) {
        handleSetStartIndex(startIndex + cardsInRow - 1);
        handleSetEndIndex(endIndex + cardsInRow);
      } else {
        handleSetStartIndex(startIndex + cardsInRow);
        handleSetEndIndex(endIndex + cardsInRow);
      }
    }
  };

  const handlePrev = () => {
    let newStartIndex = startIndex;
    let newEndIndex = endIndex;
    if (startIndex <= cardsInRow) {
      const prevMonthDays = calculatePrevMonth(
        months[startIndex].month,
        months[startIndex].year
      );
      const newDays = [...prevMonthDays, ...months];
      updateMonths(newDays);
      newStartIndex = startIndex + prevMonthDays.length - cardsInRow;
      newEndIndex = endIndex + prevMonthDays.length - cardsInRow;
    } else {
      newStartIndex = startIndex - cardsInRow;
      newEndIndex = endIndex - cardsInRow;
    }
    handleSetStartIndex(newStartIndex);
    handleSetEndIndex(newEndIndex);
  };

  useEffect(() => {
    if (dropdownChanged) {
      let newStartIndex = searchDropdownDate(months, selectedDropdown);
      handleSetStartIndex(newStartIndex);
      handleSetEndIndex(newStartIndex + cardsInRow - 1);
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
