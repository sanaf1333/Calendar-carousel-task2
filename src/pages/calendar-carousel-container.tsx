import { useState } from "react";
import { holidays } from "@/data/holidays";
import { calculateMonth } from "@/helpers/calculate-month";
import CalendarCarouselWrapper from "./calendar-carousel-API";
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
    holiday?: Holiday[];
}

const CalendarCarousel: React.FC<Props> = ({ cardStyle, cardsInRow, holiday = holidays }) => {
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
    let calendarDays: { month: string; date: string; day: string; year: number }[] = [];
    calendarDays = calculateMonth();
    const [months, setMonths] = useState(calendarDays);
    function updateMonths(months: []) {
        setMonths(months);
    }
    const [selectedDate, setSelectedDate] = useState<string>("Today");
    function handleNavbarDateValue(value: string) {
        setSelectedDate(value);
    }
    const [selectedDropdown, setSelectedDropdown] = useState<string>("Today");
    const [dropdownChanged, setDropdownChanged] = useState(false);
    function handleSetDropdownChanged(value: boolean) {
        setDropdownChanged(value);
    }
    function handleDropdownChange(value: string) {
        setSelectedDropdown(value);
        console.log(selectedDropdown);
        handleSetDropdownChanged(true);
    }

    return (
        <>
            <CalendarCarouselWrapper cardStyle={mergedCardStyle} cardsInRow={cardsInRow} holiday={holiday} selectedDate={selectedDate} months={months} updateMonths={updateMonths} handleDropdownChange={handleDropdownChange} startIndex={startIndex} handleSetStartIndex={handleSetStartIndex} endIndex={endIndex} handleSetEndIndex={handleSetEndIndex} handleNavbarDateValue={handleNavbarDateValue} selectedDropdown={selectedDropdown} dropdownChanged={dropdownChanged} handleSetDropdownChanged={handleSetDropdownChanged} />
        </>
    );
};

export default CalendarCarousel;