import React, { useState } from 'react';
import { Button, Space, Layout } from 'antd';
import DateCard from './date-card';
import useCarousel from '@/hooks/use-card-carousel';
import { DisabledDates } from '@/interfaces/disabled-dates-interface';
import { dateCardProps } from "@/interfaces/date-card-props-interface";
import { defaultTimeOptions } from '@/data/time-options';
interface Props {//typescript utlity type omit
    onClickNavbarDate: (month: string, date: string, year: number) => void;
    disabledDates?: DisabledDates[];
    months: any[];
    updateMonths: (updatedMonths: any[]) => void;
    selectedDate: string;
    startIndex: number;
    handleSetStartIndex: (value: number) => void;
    endIndex: number;
    handleSetEndIndex: (value: number) => void;
    cardsInRow?: number;
    cardStyle?: dateCardProps;
    handleCollapse: () => void;
    setTime: (value: string) => void;
    setDuration: (value: number) => void;
    availableTimeSlots?: { value: string, label: string, disabled?: boolean }[];
}

const CardCarousel: React.FC<Props> = ({ onClickNavbarDate, disabledDates, months, updateMonths, selectedDate, startIndex, handleSetStartIndex, endIndex, handleSetEndIndex, cardStyle, cardsInRow, handleCollapse, setTime, setDuration, availableTimeSlots = defaultTimeOptions }) => {
    const [selectedCard, setSelectedCard] = useState(-1);

    const handleCardClick = (index: number) => {
        setTime(availableTimeSlots[0].value);
        setDuration(60);
        handleCollapse();
        setSelectedCard(index);
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
        cardsInRow,
    });

    return (
        <Space direction='horizontal' style={{ display: "flex", justifyContent: 'center', alignSelf: "center" }} data-testid="card-carousel">
            <Button onClick={handlePrev}>
                {'<'}
            </Button>

            <Space style={{ display: 'flex', justifyContent: 'center', flexDirection: "row", backgroundColor: "white" }}>
                {months.slice(startIndex, endIndex + 1).map((calendarDays, index) => (

                    <DateCard key={index} {...calendarDays}
                        index={index}
                        onClick={(index: number) => handleCardClick(index)}
                        onClickNavbarDate={onClickNavbarDate}
                        selected={selectedCard === index}
                        disabledDates={disabledDates}
                        selectedDate={selectedDate}
                        cardStyle={cardStyle}
                        data-testid="date-card"
                    />

                ))}
            </Space>

            <Button onClick={handleNext}>
                {'>'}
            </Button>
        </Space>

    );
};


export default CardCarousel;
