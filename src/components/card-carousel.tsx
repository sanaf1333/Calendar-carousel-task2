import React from 'react';
import { Button, Space } from 'antd';
import DateCard from './date-card';
import AddEventContainer from '../containers/add-event-container';
import { motion, AnimatePresence } from 'framer-motion';
import { holidays } from '../data/holidays';
import DateCardContainer from '../containers/date-card-container';
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
    selectedDate: string;
    startIndex: number;
    endIndex: number;
    showAddEvent: boolean;
    variants: {};
    handleAddEvent: () => void;
    handlePrev: () => void;
    handleCardClick: (index:number) => void;
    handleNext: () => void;
    selectedCard: number;
}

const CardCarousel: React.FC<Props> = ({ onClickNavbarDate, months, selectedDate, startIndex, endIndex, showAddEvent, variants, handleAddEvent, handlePrev, handleCardClick, handleNext, selectedCard }) => {

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
                            <AddEventContainer onClickAddEvent={handleAddEvent} />
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
                                <DateCardContainer key={index} {...calendarDays}
                                    index={index}
                                    onClick={(index: number) => handleCardClick(index)}
                                    onClickNavbarDate={onClickNavbarDate}
                                    selected={selectedCard === index}
                                    holiday={holidays}
                                    selectedDate={selectedDate}
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
