import { Card, Layout, Space, Modal, DatePicker } from 'antd';
import React, { useState } from 'react';
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
    year: number;
    onClick: (index:number) => void;
    onClickNavbarDate: (value: string) => void;
    selected: boolean;
    index: number;
    holiday?: Holiday[];
    selectedDate: string;
}

const DateCard: React.FC<Props> = (Props) => {

    function handleCardClick(index: number) {
        if (!isHoliday){
            Props.onClickNavbarDate(`${Props.month} ${Props.date}, ${Props.year}`);
            Props.onClick(index);
        }
        
      }
      let dateInput=`${Props.month} ${Props.date}, ${Props.year}`;
      console.log(dateInput, "jkkkkk");
      console.log(Props.selectedDate, "jkkj");
      const today=new Date();
      const month: string = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(today);
      if(`${month} ${today.getDate()}, ${today.getFullYear()}`===dateInput){
        dateInput=`Today`;
      }
      const isHoliday = Props.holiday?.some(h => h.date === Props.date && h.month === Props.month && h.year === Props.year);
    return (
        <Space style={{ margin: '0 10px' }}>
            
                <Card
                    type="inner"
                    title={Props.month}
                    bordered={false}
                    hoverable
                    style={{
                        width: 200,
                        padding: 0,
                        textAlign: 'center',
                        border: !isHoliday && dateInput===Props.selectedDate ? '2px solid pink' : 'none',
                        boxShadow: !isHoliday && dateInput===Props.selectedDate ? '1px 1px 1px 1px #c2c1c0': 'none',
                    }}
                    headStyle={{ backgroundColor: isHoliday? 'gray': 'pink', color: 'white' }}
                    bodyStyle={{ padding: 0, margin: 0 }}
                    onClick={() => handleCardClick(Props.index)}
                    
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
                        {Props.date}
                    </Title>
                    <Meta
                        description={
                            <Title
                                type="secondary"
                                level={5}
                                style={{ padding: 0, margin: 10 }}
                            >
                                {isHoliday? 'Closed':  Props.day}
                            </Title>
                        }
                    />
                </Card>
        </Space>
    );


};

export default DateCard;