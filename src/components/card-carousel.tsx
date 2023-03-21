import React, { useState } from 'react';
import { Button } from 'antd';
import DateCard from './date-card';

interface CardData {
  month: string;
  date: string;
  day: string;
}

interface Props {
  cards: CardData[];
}

const CardCarousel: React.FC<Props> = ({ cards }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(2);

  const handleNext = () => {
    if (endIndex < cards.length - 1) {
      setStartIndex(startIndex + 3);
      setEndIndex(endIndex + 3);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 3);
      setEndIndex(endIndex - 3);
    }
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <Button disabled={startIndex === 0} onClick={handlePrev}>
          Previous
        </Button>
        <Button disabled={endIndex === cards.length - 1} onClick={handleNext}>
          Next
        </Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {cards.slice(startIndex, endIndex + 1).map((cardData, index) => (
          <DateCard key={index} {...cardData} />
        ))}
      </div>
    </>
  );
};

export default CardCarousel;
