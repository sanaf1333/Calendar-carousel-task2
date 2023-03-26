import React, { useState } from "react";
import { Col } from 'antd';
import AddEvent from "../components/add-event";

interface Props {
    month?: string;
    date?: string;
    year?: number;
    onClickAddEvent: () => void;
}

const defaultOptions = [
    { value: '12pm', label: '12:00' },
    { value: '1pm', label: '13:00' },
    { value: '2pm', label: '14:00' },
    { value: '3pm', label: '15:00' },
    { value: '4pm', label: '16:00' },
    { value: '5pm', label: '17:00' },
    { value: '6pm', label: '18:00' },
    { value: '7pm', label: '19:00' },
    { value: '8pm', label: '20:00' },
    { value: '9pm', label: '21:00' },
    { value: '10pm', label: '22:00' },
    { value: '11pm', label: '23:00', disabled: true },
];

const AddEventContainer: React.FC<Props> = ({ month, date, year, onClickAddEvent }) => {
    const [duration, setDuration] = useState(0);

    const formatDuration = (duration: number): string => {
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleDurationChange = (amount: number) => {
        setDuration(prevDuration => {
            const newDuration = prevDuration + amount * 60; 
            return Math.max(newDuration, 0); // prevent negative duration
        });
    };

    return (
        <Col style={{backgroundColor:"white", height:"200px"}}>
            <AddEvent
                month={month}
                date={date}
                year={year}
                options={defaultOptions}
                duration={duration}
                formatDuration={formatDuration}
                handleDurationChange={handleDurationChange}
                onClickAddEvent={onClickAddEvent}
            />
        </Col>
    );
};

export default AddEventContainer;
