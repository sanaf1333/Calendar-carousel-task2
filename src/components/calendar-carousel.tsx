import { useState } from "react";
import { holidays } from "@/data/holidays";
import { calculateMonth } from "@/helpers/calculate-month";
import CollapsedCalendar from "@/components/collapse-calendar";
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
const defaultProps: dateCardProps = {
    headerColor: '#eb4c34',
    monthColor: 'white',
    dayColor: 'gray',
    dateColor: 'gray',
    cardBackgroundColor: 'white',
    cardWidth: 150,
    disabledColor: 'gray',
    selectedBorder: '1px solid gray',
};
interface Props {
    cardStyle?: dateCardProps;
    cardsInRow?: number;
    disabledDates?: DisabledDates[];
}

const CalendarCarousel: React.FC<Props> = ({ cardStyle, cardsInRow, disabledDates = holidays }) => {
    const mergedCardStyle = {
        ...defaultProps,
        ...cardStyle,
    };
    
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(2);
    function handleSetStartIndex(value: number) {
        setStartIndex(value);
    }
    function handleSetEndIndex(value: number) {
        setEndIndex(value);
    }
    let calendarDays: { month: string; date: string; day: string; year: number }[] = [];//type separate
    calendarDays = calculateMonth();
    const [months, setMonths] = useState(calendarDays);
    function updateMonths(months: []) {
        setMonths(months);
    }
    const [selectedDate, setSelectedDate] = useState<string>("Today");
    function handleNavbarDateValue(value: string) {
        setSelectedDate(value);
    }
    
    return (
        <>
            <div data-testid="calendar-carousel">      
            <CollapsedCalendar cardStyle={mergedCardStyle} cardsInRow={cardsInRow} disabledDates={disabledDates} selectedDate={selectedDate} months={months} updateMonths={updateMonths} startIndex={startIndex} handleSetStartIndex={handleSetStartIndex} endIndex={endIndex} handleSetEndIndex={handleSetEndIndex} handleNavbarDateValue={handleNavbarDateValue} />
            </div>
        </>
    );
};

export default CalendarCarousel;