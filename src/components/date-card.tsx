import React from 'react';
import { Card, Space, Typography } from 'antd';
import { DisabledDatesType } from '@/types/disabled-dates-type';
import { dateCardStyleProps } from "@/types/date-card-style-props";
import { formatDate, formatMonth } from '@/helpers/format-date';
const { Meta } = Card;
const { Title, Text } = Typography;
interface dateCardProps {
    month: string;
    date: string;
    day: string;
    year: number;
    index: number;
    disabledDates?: DisabledDatesType[];
    selectedDate: string;
    cardStyle?: dateCardStyleProps;
    onClick: (index: number) => void;
    onClickNavbarDate: (value: string) => void;
}
const today = new Date();
const monthString: string = formatMonth(today);
const DateCard: React.FC<dateCardProps> = ({ month, date, day, year, index, disabledDates, selectedDate, cardStyle, onClickNavbarDate, onClick }) => {
    let dateInput = formatDate(month, date, year);

    if (`${monthString} ${today.getDate()}, ${today.getFullYear()}` === dateInput) {
        dateInput = `Today`;
    }
    if (`${monthString} ${today.getDate()}, ${today.getFullYear()}` === selectedDate) {
        selectedDate = `Today`;
    }
    const isHoliday = disabledDates?.some(h => h.date === date && h.month === month && h.year === year);

    function handleCardClick(index: number) {
        if (!isHoliday) {
            onClickNavbarDate(`${month} ${date}, ${year}`);
            onClick(index);
        }
    }
    return (
        <Space style={{ margin: '0 10px' }}>
            <Card
                data-testid="date-card"
                type="inner"
                title={<Text style={{
                    padding: 0,
                    margin: 0,
                    color: "white",
                    fontSize: 18,
                    fontWeight: 30,
                    fontFamily: "sans-serif"
                }}>{month}</Text>}
                bordered={false}
                hoverable={!isHoliday}
                style={{
                    width: cardStyle?.cardWidth,
                    padding: 0,
                    textAlign: 'center',
                    boxShadow: !isHoliday && dateInput === selectedDate ? '0 0 5px 2px rgba(200, 200, 200, 0.5)' : 'none',
                    backgroundColor: cardStyle?.cardBackgroundColor,
                }}
                headStyle={{
                    backgroundColor: isHoliday ? cardStyle?.disabledColor : cardStyle?.headerColor,
                    color: cardStyle?.monthColor,
                    margin: "0 0 0 0px",
                    padding: "0 0 0 0px",
                    minHeight: "40px"
                }}
                bodyStyle={{ padding: 0, margin: 0 }}
                onClick={() => handleCardClick(index)}

            >
                <Title
                    style={{
                        fontWeight: 100,
                        fontSize: 54,
                        padding: 0,
                        margin: 0,
                        color: cardStyle?.dateColor,
                        fontFamily: "sans-serif"
                    }}
                >
                    {date}
                </Title>
                <Meta
                    description={
                        <Title
                            level={5}
                            style={{
                                padding: 0,
                                margin: 10,
                                color: cardStyle?.dayColor,
                                fontFamily: "sans-serif",
                                fontWeight: 10,
                                fontSize: 20
                            }}
                        >
                            {isHoliday ? 'Closed' : day}
                        </Title>
                    }
                />
            </Card>
        </Space>
    );
};

export default DateCard;