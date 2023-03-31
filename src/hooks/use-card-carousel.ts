import { useEffect } from 'react';
import { calculateNextMonth } from '@/helpers/calculate-next';
import { calculatePrevMonth } from '@/helpers/calculate-prev';
import { monthsType } from '@/types/months-type';
interface UseCarouselProps {
  startIndexCardsDisplayed: number;
  endIndexCardsDisplayed: number;
  handleSetStartIndexCardsDisplayed: (value: number) => void;
  handleSetEndIndexCardsDisplayed: (value: number) => void;
  months: monthsType[];
  updateMonths: (updatedMonths: monthsType[]) => void;
  cardsInRow?: number;
}

const useCarousel = ({
  startIndexCardsDisplayed,
  endIndexCardsDisplayed,
  handleSetStartIndexCardsDisplayed,
  handleSetEndIndexCardsDisplayed,
  months,
  updateMonths,
  cardsInRow = 3,
}: UseCarouselProps) => {

  let today: Date = new Date();
  const todayIndex = months.findIndex(card => card.date === today.getDate().toString());
  useEffect(() => {
    if (todayIndex >= 0) {
      handleSetStartIndexCardsDisplayed(todayIndex);
      handleSetEndIndexCardsDisplayed(todayIndex + cardsInRow - 1);
    }
  }, [todayIndex]);

  if(months.length - todayIndex < cardsInRow){
    const nextMonthDays = calculateNextMonth(
      months[startIndexCardsDisplayed].month,
      months[startIndexCardsDisplayed].year
    );
    const newDays = [...months, ...nextMonthDays];
    updateMonths(newDays);
    handleSetEndIndexCardsDisplayed(endIndexCardsDisplayed + (todayIndex-months.length));
  }
  const handleNext = () => {
    if (months.length - endIndexCardsDisplayed <= cardsInRow) {
      const nextMonthDays = calculateNextMonth(
        months[startIndexCardsDisplayed].month,
        months[startIndexCardsDisplayed].year
      );
      const newDays = [...months, ...nextMonthDays];
      updateMonths(newDays);
    }

    if (endIndexCardsDisplayed < months.length - 1) {
      if (endIndexCardsDisplayed - startIndexCardsDisplayed < cardsInRow - 1) {
        handleSetStartIndexCardsDisplayed(startIndexCardsDisplayed + cardsInRow - 1);
        handleSetEndIndexCardsDisplayed(endIndexCardsDisplayed + cardsInRow);
      } else {
        handleSetStartIndexCardsDisplayed(startIndexCardsDisplayed + cardsInRow);
        handleSetEndIndexCardsDisplayed(endIndexCardsDisplayed + cardsInRow);
      }
    }
  };

  const handlePrev = () => {
    let newStartIndexCardsDisplayed = startIndexCardsDisplayed;
    let newEndIndexCardsDisplayed = endIndexCardsDisplayed;
    if (startIndexCardsDisplayed <= cardsInRow) {
      const prevMonthDays = calculatePrevMonth(
        months[startIndexCardsDisplayed].month,
        months[startIndexCardsDisplayed].year
      );
      const newDays = [...prevMonthDays, ...months];
      updateMonths(newDays);
      newStartIndexCardsDisplayed = startIndexCardsDisplayed + prevMonthDays.length - cardsInRow;
      newEndIndexCardsDisplayed = endIndexCardsDisplayed + prevMonthDays.length - cardsInRow;
    } else {
      newStartIndexCardsDisplayed = startIndexCardsDisplayed - cardsInRow;
      newEndIndexCardsDisplayed = endIndexCardsDisplayed - cardsInRow;
    }
    handleSetStartIndexCardsDisplayed(newStartIndexCardsDisplayed);
    handleSetEndIndexCardsDisplayed(newEndIndexCardsDisplayed);
  };

  return {
    handleNext,
    handlePrev,
  };
};

export default useCarousel;
