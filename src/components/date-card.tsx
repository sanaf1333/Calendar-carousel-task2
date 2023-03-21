import { Card } from 'antd';
import React from 'react';
const { Meta } = Card;
import { Typography } from 'antd';
const { Title } = Typography;
interface Props {
    month: string;
    date: string;
    day: string;
}

const DateCard: React.FC<Props> = ({ month, date, day }) => (
    <Card
        type="inner"
        title={month}
        bordered={false}
        style={{ width: 200, padding: 0, textAlign: 'center' }}
        headStyle={{ backgroundColor: 'pink', color: 'white' }}
        bodyStyle={{ padding: 0, margin: 0 }}
    >
        <Title type="secondary" style={{ fontWeight: 'bold', fontSize: 54, padding: 0, margin: 10 }}>{date}</Title>
        <Meta
            description={<Title type="secondary" level={5} style={{ padding: 0, margin: 10 }}>{day}</Title>}
        />
    </Card>
);

export default DateCard;