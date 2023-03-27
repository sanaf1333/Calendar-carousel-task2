import { useState } from "react";
import { holidays } from "../data/holidays";
import { calculateMonth } from "../helpers/calculate-month";
import CardCarouselContainer from "../containers/card-carousel-container";
import NavbarContainer from "../containers/navbar-container";
interface Holiday {
    name: string;
    date: string;
    month: string;
    year: number;
  }

interface dateCardProps{
    headerColor?: string;
    monthColor?: string;
    dayColor?: string;
    dateColor?:string;
    cardBackgroundColor?: string;
    cardWidth?: number;
    disabledColor?: string;
    selectedBorder?: string;
}
const defaultProps: dateCardProps = {
    headerColor: 'red',
    monthColor: 'white',
    dayColor: 'gray',
    dateColor: 'gray',
    cardBackgroundColor: 'white',
    cardWidth: 200,
    disabledColor: 'gary',
    selectedBorder: '1px solid gray',
};
interface Props {
    cardStyle?: dateCardProps;
    cardsInRow?: number;
    holidays?: Holiday[];
  }

const CalendarCarousel: React.FC<Props> = ({cardStyle, cardsInRow, holidays}) => {
    const mergedCardStyle = {
        ...defaultProps,
        ...cardStyle,
    };
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(2);
    function handleSetStartIndex(value: number){
        setStartIndex(value);
    }
    function handleSetEndIndex(value: number){
        setEndIndex(value);
    }
    let calendarDays: { month: string; date: string; day: string; year: number }[] = [];
    calendarDays = calculateMonth();
    const [months, setMonths] = useState(calendarDays);
    function updateMonths(months: []){
        setMonths(months);
    }
    const [selectedDate, setSelectedDate] = useState<string>("Today");
    function handleNavbarDateValue(value: string) {
    setSelectedDate(value);
    }
    const [selectedDropdown, setSelectedDropdown]= useState<string>("Today");
    const [dropdownChanged, setDropdownChanged]= useState(false);
    function handleSetDropdownChanged(value: boolean){
        setDropdownChanged(value);
        console.log("1", dropdownChanged);
    }
    function handleDropdownChange(value: string){
        setSelectedDropdown(value);
        console.log(selectedDropdown);
        handleSetDropdownChanged(true);
        console.log("2", dropdownChanged);
    }
    
    return (
        <>
        <NavbarContainer date={selectedDate} months={months} updateMonths={updateMonths} handleDrodpownChange={handleDropdownChange} startIndex={startIndex} handleSetStartIndex={handleSetStartIndex} endIndex={endIndex} handleSetEndIndex={handleSetEndIndex} />
        <CardCarouselContainer onClickNavbarDate={handleNavbarDateValue} holiday={holidays} months={months} updateMonths={updateMonths} selectedDate={selectedDate} selectedDropdown={selectedDropdown} dropdownChanged={dropdownChanged} handleSetDropdownChanged={handleSetDropdownChanged} startIndex={startIndex} handleSetStartIndex={handleSetStartIndex} endIndex={endIndex} handleSetEndIndex={handleSetEndIndex} cardStyle={mergedCardStyle} />
        </>
    );
};

export default CalendarCarousel;