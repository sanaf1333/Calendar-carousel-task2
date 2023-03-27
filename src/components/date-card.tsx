import { Card, Space} from 'antd';
import React from 'react';
const { Meta } = Card;
import { Typography } from 'antd';
const { Title } = Typography;
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
interface Props {
    month: string;
    date: string;
    day: string;
    index: number;
    holiday?: Holiday[];
    selectedDate: string;
    isHoliday: boolean | undefined;
    dateInput: string;
    handleCardClick: (index:number)=> void;
    cardStyle?: dateCardProps;
}

const DateCard: React.FC<Props> = ({month, date, day, index, selectedDate, isHoliday, dateInput, handleCardClick, cardStyle}) => {

    return (
        <Space style={{ margin: '0 10px' }}>
            
                <Card
                    type="inner"
                    title={month}
                    bordered={false}
                    hoverable={!isHoliday}
                    style={{
                        width: cardStyle?.cardWidth,
                        padding: 0,
                        textAlign: 'center',
                        border: !isHoliday && dateInput===selectedDate ? cardStyle?.selectedBorder : 'none',
                        backgroundColor: cardStyle?.cardBackgroundColor,
                    }}
                    headStyle={{ backgroundColor: isHoliday? cardStyle?.disabledColor: cardStyle?.headerColor, color: cardStyle?.monthColor }}
                    bodyStyle={{ padding: 0, margin: 0 }}
                    onClick={() => handleCardClick(index)}
                    
                >
                    <Title
                        style={{
                            fontWeight: 'bold',
                            fontSize: 54,
                            padding: 0,
                            margin: 10,
                            color: cardStyle?.dateColor,
                        }}
                    >
                        {date}
                    </Title>
                    <Meta
                        description={
                            <Title
                                level={5}
                                style={{ padding: 0, margin: 10, color: cardStyle?.dayColor }}
                            >
                                {isHoliday? 'Closed':  day}
                            </Title>
                        }
                    />
                </Card>
        </Space>
    );


};

export default DateCard;