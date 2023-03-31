import React from "react";
import { Select, Space, Button, Typography, Col, Row, theme } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { defaultTimeOptions } from "@/data/time-options";
import { eventCalendarProps } from "@/types/event-calendar-props";

const { Text } = Typography;
const { useToken } = theme;

type AddEventProps = Omit<eventCalendarProps, "cardStyle" | "cardsInRow" | "disabledDates" | "months" | "updateMonths" | "startIndexCardsDisplayed" | "handleSetStartIndexCardsDisplayed" | "endIndexCardsDisplayed" | "handleSetEndIndexCardsDisplayed" | "handleNavbarDateValue" | "handleCollapse" | "collapseActive" | "onClickNavbarDate">;
const AddEvent: React.FC<AddEventProps> = ({ selectedDate, availableTimeSlots = defaultTimeOptions, onClickAddEvent, time, duration, handleTimeChange, handleDurationChange, formatDuration, setTime, setDuration }) => {
    const { token } = useToken();

    const handleAddEvent = () => {
        const formattedDuration = formatDuration(duration);
        const event = { time, formattedDuration, selectedDate };
        onClickAddEvent && onClickAddEvent(event);
        setTime(availableTimeSlots[0].value);
        setDuration(60);
    }
    return (
        <Col style={{ backgroundColor: "white", height: "200px" }} data-testid="add-event-component" >
            <Row style={{ marginBottom: token.marginLG }}>
                <Col span={4} offset={8} >
                    <Text strong style={{ fontSize: token.fontSizeLG }}>Time:</Text>
                </Col>
                <Col span={4} style={{ textAlign: "end" }}>
                    <Select
                        value={time}
                        data-testid="add-event"
                        defaultValue={availableTimeSlots[0].value}
                        style={{ width: 120 }}
                        options={availableTimeSlots}
                        bordered={false}
                        suffixIcon={<DownOutlined style={{ color: token.colorPrimary }} />}
                        onChange={(e) => { handleTimeChange(e) }}
                    />
                </Col>
            </Row>
            <Row style={{ marginBottom: token.marginLG }} >
                <Col span={4} offset={8}>
                    <Text strong style={{ fontSize: token.fontSizeLG }}>Duration</Text>
                </Col>
                <Col span={4} style={{ textAlign: "end" }}>
                    <Space>
                        <Button shape="circle" style={{ borderColor: token.colorPrimary, color: token.colorPrimary }} ghost onClick={() => handleDurationChange(-1)} data-testid="duration-decrease">
                            -
                        </Button>
                        <div data-testid="duration-value">{formatDuration(duration)}</div>
                        <Button shape="circle" style={{ borderColor: token.colorPrimary, color: token.colorPrimary }} ghost onClick={() => handleDurationChange(1)} data-testid="duration-increase">
                            +
                        </Button>
                    </Space>
                </Col>
            </Row>
            <Row style={{ marginBottom: token.marginLG }}>
                <Col span={8} offset={12}>
                    <Button onClick={handleAddEvent} data-testid="ok-button">OK</Button>
                </Col>
            </Row>
        </Col>
    );

};

export default AddEvent;