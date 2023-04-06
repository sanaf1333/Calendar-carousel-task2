import React from 'react';
import { Button, Space, Carousel } from 'antd';
import DateCard from './date-card';
import useCarousel from '@/hooks/use-card-carousel';
import { defaultTimeOptions } from '@/data/time-options';
import { eventCalendarProps } from '@/types/event-calendar-props';

type cardCarouselProps = Omit<eventCalendarProps, "handleNavbarDateValue" | "onClickAddEevent" | "time" | "duration" | "handleTimeChange" | "handleDurationChange" | "formatDuration" | "collapseActive">;

const CardCarousel: React.FC<cardCarouselProps> = ({ onClickNavbarDate, disabledDates, months, updateMonths, selectedDate, startIndexCardsDisplayed, handleSetStartIndexCardsDisplayed, endIndexCardsDisplayed, handleSetEndIndexCardsDisplayed, cardStyle, cardsInRow, handleCollapse, setTime, setDuration, availableTimeSlots = defaultTimeOptions }) => {
    const handleCardClick = () => {
        setTime(availableTimeSlots[0].value);
        setDuration(60);
        handleCollapse();
    };

    const {
        handleNext,
        handlePrev,
    } = useCarousel({
        startIndexCardsDisplayed,
        endIndexCardsDisplayed,
        handleSetStartIndexCardsDisplayed,
        handleSetEndIndexCardsDisplayed,
        months,
        updateMonths,
        cardsInRow,
    });
    const cards = months.slice(startIndexCardsDisplayed, endIndexCardsDisplayed + 1).map((calendarDays, index) => (
        <DateCard key={index} {...calendarDays}
          index={index}
          onClick={handleCardClick}
          onClickNavbarDate={onClickNavbarDate}
          disabledDates={disabledDates}
          selectedDate={selectedDate}
          cardStyle={cardStyle}
          data-testid="date-card"
        />
      ));
    return (
        <Space direction='horizontal' style={{ display: "flex", justifyContent: 'center', alignSelf: "center" }} data-testid="card-carousel">
            <Button onClick={handlePrev}>
                {'<'}
            </Button>
            <Carousel dots={false} swipeToSlide={true} slidesToShow={3} effect='scrollx'>
                {months.slice(startIndexCardsDisplayed, endIndexCardsDisplayed + 1).map((calendarDays, index) => (
                    <DateCard key={index} {...calendarDays}
                    index={index}
                    onClick={handleCardClick}
                    onClickNavbarDate={onClickNavbarDate}
                    disabledDates={disabledDates}
                    selectedDate={selectedDate}
                    cardStyle={cardStyle}
                    data-testid="date-card"
                />
                ))}
                </Carousel>

            <Button onClick={handleNext}>
                {'>'}
            </Button>
        </Space>
    );
};


export default CardCarousel;