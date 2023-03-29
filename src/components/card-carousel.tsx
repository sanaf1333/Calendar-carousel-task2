import React, {useState} from 'react';
import { Button, Space, Layout } from 'antd';
import DateCard from './date-card';
import useCarousel from '@/hooks/use-card-carousel';
interface DisabledDates {
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
}

const CardCarousel: React.FC<Props> = ({ onClickNavbarDate, disabledDates, months, updateMonths, selectedDate, startIndex, handleSetStartIndex, endIndex, handleSetEndIndex, cardStyle, cardsInRow }) => {
    const [selectedCard, setSelectedCard] = useState(-1);

    const handleCardClick = (index: number) => {
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
        <>
           
                <Layout style={{backgroundColor: "white" }}>
                    <Space direction='horizontal' style={{ display: "flex", justifyContent: 'center', alignSelf: "center" }}>
                        <Button onClick={handlePrev}>
                            {'<'}
                        </Button>
                        
                        <Layout style={{ display: 'flex', justifyContent: 'center', flexDirection: "row", backgroundColor: "white" }}>
                            {months.slice(startIndex, endIndex + 1).map((calendarDays, index) => (
                              
                                <DateCard key={index} {...calendarDays}
                                    index={index}
                                    onClick={(index: number) => handleCardClick(index)}
                                    onClickNavbarDate={onClickNavbarDate}
                                    selected={selectedCard === index}
                                    disabledDates={disabledDates}
                                    selectedDate={selectedDate}
                                    cardStyle={cardStyle}
                                />
                                
                            ))}
                        </Layout>
                        
                        <Button onClick={handleNext}>
                            {'>'}
                        </Button>
                    </Space>
                </Layout>
           
        </>

    );
};


export default CardCarousel;
