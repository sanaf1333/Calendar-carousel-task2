import { useState } from "react";
import { Alert, Space } from "antd";
import { defaultDisabledDates } from "@/data/disabled-dates";
import { calculateMonth } from "@/helpers/calculate-month";
import { APIProps } from "@/interfaces/API-props";
import { defaultTimeOptions } from "@/data/time-options";
import { defaultProps } from "@/interfaces/card-style-default-props";
import EventCalendarCarousel from "@/components/event-calendar-carousel";
const EventCalendarCarouselContainer: React.FC<APIProps> = ({ cardStyle, cardsInRow, disabledDates = defaultDisabledDates, availableTimeSlots = defaultTimeOptions, onClickAddEvent }) => {
    const mergedCardStyle = {
        ...defaultProps,
        ...cardStyle,
    };
    const [collapseActive, setCollapseActive] = useState(false);


    const [alertVisible, setAlertVisible] = useState(false);
    const [startIndex, setStartIndex] = useState(0);//variable names
    const [endIndex, setEndIndex] = useState(2);
    const [duration, setDuration] = useState(60);
    const [time, setTime] = useState(availableTimeSlots[0].value);
    const [addEventAlertDescription, setAddEeventAlertDescription] = useState("");
    const handleCollapse = () => {
        setAlertVisible(false);
        setCollapseActive(!collapseActive);
    };
    const formatDuration = (duration: number): string => {
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleDurationChange = (amount: number) => {
        setAlertVisible(false);
        collapseActive && handleCollapse();
        setDuration(prevDuration => {
            const newDuration = prevDuration + amount * 60;
            return Math.max(newDuration, 60);
        });
    };

    const handleTimeChange = (e: string) => {
        setAlertVisible(false);
        collapseActive && handleCollapse();
        setTime(e);
    }
    function handleSetStartIndex(value: number) {
        setStartIndex(value);
    }
    function handleSetEndIndex(value: number) {
        setEndIndex(value);
    }
    let calendarDays = calculateMonth();//const
    const [months, setMonths] = useState(calendarDays);
    function updateMonths(months: []) {
        setMonths(months);
    }
    const [selectedDate, setSelectedDate] = useState<string>("Today");
    function handleNavbarDateValue(value: string) {
        setAlertVisible(false);
        setSelectedDate(value);
    }
    const [alertType, setAlertType] = useState<"success" | "info" | "warning" | "error" | undefined>(undefined)
    onClickAddEvent = (event: { time: string, formattedDuration: string, selectedDate: string }) => {

        let extractedDate = new Date(selectedDate);
        if (selectedDate == "Today") {
            extractedDate = new Date();
        }
        let todaysDate = new Date();
        if (extractedDate >= todaysDate) {
            setAddEeventAlertDescription(`for ${event.selectedDate} at ${event.time} for ${event.formattedDuration}`);
            setAlertType("success")
            setAlertVisible(true);
            return event;
        }
        else {
            setAddEeventAlertDescription(`cannot create event on past date`);
            setAlertType("error");
            setAlertVisible(true);
        }
    }


    return (
        <div data-testid="calendar-carousel">
            <Space direction="horizontal" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                {alertVisible && <Alert
                    message="Event created successfully"
                    type={alertType}
                    description={addEventAlertDescription}
                    showIcon
                    closable
                    onClose={() => setAlertVisible(false)}
                    banner
                />}
            </Space>
            <EventCalendarCarousel selectedDate={selectedDate} cardStyle={mergedCardStyle} cardsInRow={cardsInRow} disabledDates={disabledDates} months={months} updateMonths={updateMonths} startIndex={startIndex} handleSetStartIndex={handleSetStartIndex} endIndex={endIndex} handleSetEndIndex={handleSetEndIndex} handleNavbarDateValue={handleNavbarDateValue} setTime={setTime} setDuration={setDuration} availableTimeSlots={availableTimeSlots} onClickAddEvent={onClickAddEvent} time={time} duration={duration} handleTimeChange={handleTimeChange} handleDurationChange={handleDurationChange} formatDuration={formatDuration} handleCollapse={handleCollapse} collapseActive={collapseActive} />
        </div>
    );
};

export default EventCalendarCarouselContainer;


