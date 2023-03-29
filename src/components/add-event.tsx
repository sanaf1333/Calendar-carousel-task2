import React, {useState} from "react";
import { Select, Space, Button, Typography, Col, Row, theme } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { defaultTimeOptions } from "@/data/time-options";
const { Text } = Typography;
const { useToken } = theme;

interface Props {
    month?: string;
    date?: string;
    year?: number;
    options?: { value: string; label: string; disabled?: boolean }[];
}



const AddEvent: React.FC<Props> = ({ month, date, year, options=defaultTimeOptions }) => {
    
    const [duration, setDuration] = useState(0);
    const [time, setTime] = useState(options[0].value);
    const formatDuration = (duration: number): string => {
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    const { token } = useToken();
    const handleDurationChange = (amount: number) => {
        setDuration(prevDuration => {
            const newDuration = prevDuration + amount * 60;
            return Math.max(newDuration, 0); // prevent negative duration
        });
    };

    const handleTimeChange= (e: string) => {
        console.log(e);
        setTime(e);
    }
    const onClickAddEvent = () => {
        // do something with time and duration
        console.log("Time:", time);
        console.log("Duration:", formatDuration(duration));
        return [date, month, year, time, duration];
    }
    return (
        <Col style={{ backgroundColor: "white", height: "200px" }}>
            <Row style={{marginBottom: "20px"}}>
                <Col span={4} offset={8} >
                    <Text strong>Time:</Text>
                </Col>
                <Col span={4} style={{textAlign: "end"}}>
                    <Select
                        defaultValue={options[0].value}
                        style={{ width: 120 }}
                        options={options}
                        bordered={false}
                        suffixIcon={<DownOutlined style={{ color: token.colorPrimary }} />}
                        onChange={(e)=> {handleTimeChange(e)}}
                    />
                </Col>
            </Row>
            <Row style={{marginBottom: "20px"}}>
                <Col span={4} offset={8}>
                    <Text strong>Duration</Text>
                </Col>
                <Col span={4} style={{textAlign: "end"}}>
                    <Space>
                        <Button shape="circle" style={{borderColor: token.colorPrimary, color: "black" }} ghost onClick={() => handleDurationChange(-1)}>
                            -
                        </Button>
                        <div>{formatDuration(duration)}</div>
                        <Button shape="circle" style={{borderColor: token.colorPrimary, color: "black" }} ghost onClick={() => handleDurationChange(1)}>
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