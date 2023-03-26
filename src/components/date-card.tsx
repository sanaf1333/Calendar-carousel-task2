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
}

const DateCard: React.FC<Props> = ({month, date, day, index, selectedDate, isHoliday, dateInput, handleCardClick}) => {

    return (
        <Space style={{ margin: '0 10px' }}>
            
                <Card
                    type="inner"
                    title={month}
                    bordered={false}
                    hoverable
                    style={{
                        width: 200,
                        padding: 0,
                        textAlign: 'center',
                        border: !isHoliday && dateInput===selectedDate ? '2px solid pink' : 'none',
                        boxShadow: !isHoliday && dateInput===selectedDate ? '1px 1px 1px 1px #c2c1c0': 'none',
                    }}
                    headStyle={{ backgroundColor: isHoliday? 'gray': 'pink', color: 'white' }}
                    bodyStyle={{ padding: 0, margin: 0 }}
                    onClick={() => handleCardClick(index)}
                    
                >
                    <Title
                        type="secondary"
                        style={{
                            fontWeight: 'bold',
                            fontSize: 54,
                            padding: 0,
                            margin: 10,
                        }}
                    >
                        {date}
                    </Title>
                    <Meta
                        description={
                            <Title
                                type="secondary"
                                level={5}
                                style={{ padding: 0, margin: 10 }}
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