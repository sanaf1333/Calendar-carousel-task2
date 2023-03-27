import React, { useState } from "react";
import { Col, Row } from 'antd';
import { Select, Space, Button } from 'antd';

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
                    Time:
                </Col>
                <Col span={8}>
                    <Select
                        defaultValue={options[0].value}
                        style={{ width: 120 }}
                        options={options}
                        bordered={false}
                    />
                </Col>
            </Row >
            <Row style={{ marginBottom: "20px" }}>
                <Col span={8} offset={8}>
                    Duration
                </Col>
                <Col span={8}>
                    <Space>
                        <Button shape="circle" onClick={() => handleDurationChange(-1)}>
                            -
                        </Button>
                        <div>{formatDuration(duration)}</div>
                        <Button shape="circle" onClick={() => handleDurationChange(1)}>
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