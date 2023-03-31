import { useState } from "react";
import { Alert, Space } from "antd";
import { defaultDisabledDates } from "@/data/disabled-dates";
import { calculateMonth } from "@/helpers/calculate-month";
import { eventCalendarCarouselAPIProps } from "@/types/event-calendar-carousel-API-props";
import { defaultTimeOptions } from "@/data/time-options";
import { defaultProps } from "@/types/card-style-default-props";
import EventCalendarCarousel from "@/components/event-calendar-carousel";
const EventCalendarCarouselContainer: React.FC<eventCalendarCarouselAPIProps> = ({ cardStyle, cardsInRow, disabledDates = defaultDisabledDates, availableTimeSlots = defaultTimeOptions, onClickAddEvent }) => {
    const mergedCardStyle = {
        ...defaultProps,
        ...cardStyle,
    };
    const [collapseActive, setCollapseActive] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);
    const [startIndexCardsDisplayed, setStartIndexCardsDisplayed] = useState(0);
    const [endIndexCardsDisplayed, setEndIndexCardsDisplayed] = useState(2);
    const [duration, setDuration] = useState(60);
    const [time, setTime] = useState(availableTimeSlots[0].value);
    const [addEventAlertDescription, setAddEeventAlertDescription] = useState("");
    const [selectedDate, setSelectedDate] = useState<string>("Today");
    const calendarDays = calculateMonth();
    const [alertType, setAlertType] = useState<"success" | "info" | "warning" | "error" | undefined>(undefined)
    const [eventAlertMessage, setEventAlertMessage] = useState("Event created successfully");
    const [months, setMonths] = useState(calendarDays);
    function updateMonths(months: []) {
        setMonths(months);
    }

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

    function handleSetStartIndexCardsDisplayed(value: number) {
        setStartIndexCardsDisplayed(value);
    }

    function handleSetEndIndexCardsDisplayed(value: number) {
        setEndIndexCardsDisplayed(value);
    }

    function handleNavbarDateValue(value: string) {
        setAlertVisible(false);
        setSelectedDate(value);
    }

    onClickAddEvent = (event: { time: string, formattedDuration: string, selectedDate: string }) => {

        let extractedDate = new Date(selectedDate);
        if (selectedDate == "Today") {
            extractedDate = new Date();
        }
        const todaysDate = new Date();
        if (extractedDate >= todaysDate) {
            setAddEeventAlertDescription(`for ${event.selectedDate} at ${event.time} for ${event.formattedDuration} minutes(s) `);
            setEventAlertMessage("Event created successfully");
            setAlertType("success")
            setAlertVisible(true);
            return event;
        }
        else {
            setAddEeventAlertDescription(`cannot create event on past date`);
            setEventAlertMessage("Event creation failed");
            setAlertType("error");
            setAlertVisible(true);
        }
    }

    return (
        <div data-testid="calendar-carousel">
            <EventCalendarCarousel selectedDate={selectedDate} cardStyle={mergedCardStyle} cardsInRow={cardsInRow} disabledDates={disabledDates} months={months} updateMonths={updateMonths} startIndexCardsDisplayed={startIndexCardsDisplayed} handleSetStartIndexCardsDisplayed={handleSetStartIndexCardsDisplayed} endIndexCardsDisplayed={endIndexCardsDisplayed} handleSetEndIndexCardsDisplayed={handleSetEndIndexCardsDisplayed} handleNavbarDateValue={handleNavbarDateValue} setTime={setTime} setDuration={setDuration} availableTimeSlots={availableTimeSlots} onClickAddEvent={onClickAddEvent} time={time} duration={duration} handleTimeChange={handleTimeChange} handleDurationChange={handleDurationChange} formatDuration={formatDuration} handleCollapse={handleCollapse} collapseActive={collapseActive} />
            <Space align="center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                {alertVisible && <Alert
                    message={eventAlertMessage}
                    type={alertType}
                    description={addEventAlertDescription}
                    showIcon
                    closable
                    onClose={() => setAlertVisible(false)}
                    banner
                />}
            </Space>
        </div>
    );
};

export default EventCalendarCarouselContainer;


