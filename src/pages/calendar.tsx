import Navbar from "../components/navbar";
import { useState } from "react";
import CardCarousel from "../components/card-carousel";
import { holidays } from "../data/holidays";
import { calculateMonth } from "../helpers/calculate-month";
interface Holiday {
    name: string;
    date: string;
    month: string;
    year: number;
  }
interface Props {
    headerColor?: string;
    monthColor?: string;
    dayColor?: string;
    dateColor?:string;
    cardBackgroundColor?: string;
    cardWidth?: number;
    cardsInRow?: number;
    disabledColor?: string;
    disbaledDates?: Date[];
    holidays?: Holiday[];
  }

const CalendarPage: React.FC<Props> = () => {
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
    return (
        <>
        <Navbar date={selectedDate} months={months} />
        <CardCarousel onClickNavbarDate={handleNavbarDateValue} holiday={holidays} months={months} updateMonths={updateMonths} />
        </>
    );
};

export default CalendarPage;