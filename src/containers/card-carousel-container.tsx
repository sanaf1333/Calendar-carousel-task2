import useCarousel from '@/hooks/use-card-carousel';
import React, { useState } from 'react';
import CardCarousel from '@/components/card-carousel';
interface Holiday {
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

interface Props {
  onClickNavbarDate: (value: string) => void;
  holiday?: Holiday[];
  months: any[];
  updateMonths: (updatedMonths: any[]) => void;
  selectedDate: string;
  selectedDropdown: string;
  dropdownChanged: boolean;
  handleSetDropdownChanged: (value: boolean) => void;
  startIndex: number;
  handleSetStartIndex: (value: number) => void;
  endIndex: number;
  handleSetEndIndex: (value: number) => void;
  cardStyle?: dateCardProps;
  cardsInRow?: number;
}

const CardCarouselContainer: React.FC<Props> = ({ onClickNavbarDate, holiday, months, updateMonths, selectedDate, selectedDropdown, dropdownChanged, handleSetDropdownChanged, startIndex, handleSetStartIndex, endIndex, handleSetEndIndex, cardStyle, cardsInRow }) => {
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
    onClickNavbarDate,
    cardsInRow,
  });


  return (
    <div data-testid="card-carousel-container">
    <CardCarousel
      months={months}
      holiday={holiday}
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
      cardStyle={cardStyle}
      cardsInRow={cardsInRow}
    />
    </div>
  );
};

export default CardCarouselContainer;