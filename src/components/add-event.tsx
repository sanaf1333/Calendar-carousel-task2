import React from "react";
import { Select, Space, Button, Typography, Col, Row } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const { Text } = Typography;

interface Props {
    month?: string;
    date?: string;
    year?: number;
    options?: { value: string; label: string; disabled?: boolean }[];
    duration: number;
    formatDuration: (duration: number) => string;
    handleDurationChange: (amount: number) => void;
    onClickAddEvent: () => void;
}


const AddEvent: React.FC<Props> = ({ month, date, year, options = [], duration, formatDuration, handleDurationChange, onClickAddEvent }) => {

    return (
        <Col style={{ backgroundColor: "white", height: "200px" }}>
            <Row style={{ marginBottom: "20px" }}>
                <Col span={8} offset={8}>
                <Text strong>Time:</Text>
                </Col>
                <Col span={8}>
                    <Select
                        defaultValue={options[0].value}
                        style={{ width: 120 }}
                        options={options}
                        bordered={false}
                        suffixIcon={<DownOutlined style={{ color: 'blue' }} />}
                    />
                </Col>
            </Row >
            <Row style={{ marginBottom: "20px" }}>
                <Col span={8} offset={8}>
                <Text strong>Duration</Text>
                </Col>
                <Col span={8}>
                    <Space>
                        <Button shape="circle" type="primary" ghost onClick={() => handleDurationChange(-1)}>
                            -
                        </Button>
                        <div>{formatDuration(duration)}</div>
                        <Button shape="circle" type="primary" ghost onClick={() => handleDurationChange(1)}>
                            +
                        </Button>
                    </Space>
                </Col>
            </Row>
            <Row style={{ marginBottom: "20px" }}>
                <Col span={8} offset={12}>
                    <Button onClick={onClickAddEvent}>OK</Button>
                </Col>
            </Row>
        </Col>
    );

};

export default AddEvent;