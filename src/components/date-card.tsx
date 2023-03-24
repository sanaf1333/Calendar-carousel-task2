import { Card, Layout, Space, Modal, DatePicker } from 'antd';
import React, { useState } from 'react';
const { Meta } = Card;
import { Typography } from 'antd';
const { Title } = Typography;
import AddEvent from './add-event';
interface Props {
    month: string;
    date: string;
    day: string;
    year: number;
    onClick: () => void;
}

const DateCard: React.FC<Props> = (Props) => {
    
    return (
        <Space style={{ margin: '0 10px' }}>
            
                <Card
                    type="inner"
                    title={Props.month}
                    bordered={false}
                    style={{
                        width: 200,
                        padding: 0,
                        textAlign: 'center',
                    }}
                    headStyle={{ backgroundColor: 'pink', color: 'white' }}
                    bodyStyle={{ padding: 0, margin: 0 }}
                    onClick={Props.onClick}
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
                                {Props.day}
                            </Title>
                        }
                    />
                </Card>
        </Space>
    );


};

export default DateCard;