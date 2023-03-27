import { holidays } from "../data/holidays";
import CardCarouselContainer from "../containers/card-carousel-container";
import NavbarContainer from "../containers/navbar-container";
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
    cardWidth: 200,
    disabledColor: 'gray',
    selectedBorder: '1px solid gray',
};
interface Props {
    cardStyle?: dateCardProps;
    cardsInRow?: number;
    holiday?: Holiday[];
    selectedDate: string;
    months: any[];
    updateMonths: (updatedMonths: any[]) => void; 
    handleDropdownChange: (value: string) => void;
    startIndex: number;
    handleSetStartIndex: (value: number) => void;
    endIndex: number;
    handleSetEndIndex: (value: number) => void;
    handleNavbarDateValue: (value: string) => void;
    selectedDropdown: string;
    dropdownChanged: boolean;
    handleSetDropdownChanged: (value: boolean) => void;
}

const CalendarCarouselWrapper: React.FC<Props> = ({ cardStyle, cardsInRow, holiday = holidays, selectedDate, months, updateMonths, handleDropdownChange, startIndex, handleSetStartIndex, endIndex, handleSetEndIndex, handleNavbarDateValue, selectedDropdown, dropdownChanged, handleSetDropdownChanged }) => {
    
    
    return (
        <>
            <NavbarContainer date={selectedDate} months={months} updateMonths={updateMonths} handleDrodpownChange={handleDropdownChange} startIndex={startIndex} handleSetStartIndex={handleSetStartIndex} endIndex={endIndex} handleSetEndIndex={handleSetEndIndex} />
            <CardCarouselContainer onClickNavbarDate={handleNavbarDateValue} holiday={holiday} months={months} updateMonths={updateMonths} selectedDate={selectedDate} selectedDropdown={selectedDropdown} dropdownChanged={dropdownChanged} handleSetDropdownChanged={handleSetDropdownChanged} startIndex={startIndex} handleSetStartIndex={handleSetStartIndex} endIndex={endIndex} handleSetEndIndex={handleSetEndIndex} cardStyle={cardStyle} cardsInRow={cardsInRow} />
        </>
    );
};

export default CalendarCarouselWrapper;