import React, { useState, useEffect, startTransition } from 'react';
import { Button } from 'antd';
import DateCard from './date-card';
import { calculateNextMonth } from '../helpers/calculate-next';
import { calculatePrevMonth } from '../helpers/calculate-prev';
import AddEvent from './add-event';
interface CardData {
    month: string;
    date: string;
    day: string;
    year: number;
}

interface Props {
    cards: CardData[];
}

const CardCarousel: React.FC<Props> = ({ cards }) => {

    const [showAddEvent, setShowAddEvent] = useState(false);

    const handleCardClick = () => {
        setShowAddEvent(true);
    };

    const handleAddEvent = () => {
        setShowAddEvent(false);
    };

    let today: Date = new Date();
    const year = today.getFullYear();
    const daysInMonth: number = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const firstDayOfMonth: number = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    let calendarDays: { month: string; date: string; day: string; year: number }[] = [];

    for (let i = 1; i <= daysInMonth; i++) {
        const day: string = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][((firstDayOfMonth + i - 1) % 7)];
        const month: string = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(today);
        calendarDays.push({ month, date: i.toString(), day, year });
    }

    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(2);
    const [daysss, setDaysss] = useState(calendarDays);
    const todayIndex = cards.findIndex(card => card.date === today.getDate().toString());
    useEffect(() => {
        if (todayIndex >= 0) {
            setStartIndex(todayIndex);
            setEndIndex(todayIndex + 2);
        }
    }, [todayIndex]);

    const handleNext = () => {
        if (daysss.length - endIndex <= 3) {
            const nextMonthDays = calculateNextMonth(daysss[startIndex].month, daysss[startIndex].year);
            const newDays = [...daysss, ...nextMonthDays];
            setDaysss(newDays);
        }

        if (endIndex < daysss.length - 1) {
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
            const prevMonthDays = calculatePrevMonth(daysss[startIndex].month, daysss[startIndex].year);
            const newDays = [...prevMonthDays, ...daysss];
            setDaysss(newDays);
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
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                <Button onClick={handlePrev}>
                    Previous
                </Button>
                <Button disabled={endIndex === daysss.length} onClick={handleNext}>
                    Next
                </Button>
            </div>
            {showAddEvent ? (
                <AddEvent month="nm" date="ff" year={12} onClickAddEvent={handleAddEvent} />
            ) : (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {daysss.slice(startIndex, endIndex + 1).map((calendarDays, index) => (
                    <DateCard key={index} {...calendarDays} onClick={handleCardClick} />
                ))}
            </div>
            )}
        </>
    );
};


export default CardCarousel;
