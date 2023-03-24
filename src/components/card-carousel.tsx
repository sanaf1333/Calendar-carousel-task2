import React, { useState, useEffect} from 'react';
import { Button, Space} from 'antd';
import DateCard from './date-card';
import { calculateNextMonth } from '../helpers/calculate-next';
import { calculatePrevMonth } from '../helpers/calculate-prev';
import AddEvent from './add-event';
import { motion, AnimatePresence } from 'framer-motion';
import { calculateMonth } from '../helpers/calculate-month';
import { holidays } from '../data/holidays';
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
}

const CardCarousel: React.FC<Props> = ({ onClickNavbarDate, months, updateMonths }) => {
    
    const [selectedCard, setSelectedCard] = useState(-1);
    const [showAddEvent, setShowAddEvent] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(2);
    
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
            setStartIndex(todayIndex);
            setEndIndex(todayIndex + 2);
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
                setStartIndex(startIndex + 2);
                setEndIndex(endIndex + 3);
            }
            else {
                setStartIndex(startIndex + 3);
                setEndIndex(endIndex + 3);

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
        setStartIndex(newStartIndex);
        setEndIndex(newEndIndex);
    };

    return (
        <>
            <div style={{ position: "relative" }}>
                {showAddEvent && (
                    <AnimatePresence>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={variants}
                            style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 }}
                        >
                            <AddEvent month="nm" date="ff" year={12} onClickAddEvent={handleAddEvent} />
                        </motion.div>
                    </AnimatePresence>
                )}

                <div style={{ position: "relative", zIndex: 1 }}>
                    <Space direction='horizontal' style={{ display: "flex", justifyContent: 'center', alignSelf: "center" }}>
                        <Button onClick={handlePrev}>
                            {'<'}
                        </Button>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            {months.slice(startIndex, endIndex + 1).map((calendarDays, index) => (
                                <DateCard key={index} {...calendarDays}
                                    index={index}
                                    onClick={(index: number) => handleCardClick(index)}
                                    onClickNavbarDate={onClickNavbarDate}
                                    selected={selectedCard === index}
                                    holiday={holidays}
                                />
                            ))}
                        </div>

                        <Button onClick={handleNext}>
                            {'>'}
                        </Button>
                    </Space>
                </div>
            </div>
        </>

    );
};


export default CardCarousel;
