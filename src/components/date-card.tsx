import { Card, Layout, Space, Modal, DatePicker } from 'antd';
import React, {useState} from 'react';
const { Meta } = Card;
import { Typography } from 'antd';
const { Title } = Typography;
interface Props {
    month: string;
    date: string;
    day: string;
}

const DateCard: React.FC<Props> = (Props) => {

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const showModal = () => {
        setOpen(true);
      };
    
      const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
          setOpen(false);
          setConfirmLoading(false);
        }, 2000);
      };
    
      const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
      };
      
      const disabledDate = (current: any) => {
        // Can not select days before today and in the past
        const today = new Date();
        today.setHours(0, 0, 0, 0); // set time to beginning of the day
        return current && current < today;
      };
      const range = (start: number, end: number) => {
        const result: number[] = [];
        for (let i: number = start; i < end; i++) {
          result.push(i);
        }
        return result;
      };
      const now = new Date();
        let hours:number=now.getHours();
        let minutes:number=now.getMinutes();
        let seconds:number=now.getSeconds();
        const disabledDateTime = () => ({  
            disabledHours: () => {
              const now = new Date();
              const currentHour = now.getHours();
              return range(0, currentHour);
            },
            disabledMinutes: (selectedHour: number) => {
              const now = new Date();
              const currentHour = now.getHours();
              const currentMinute = now.getMinutes();
              if (selectedHour === currentHour) {
                return range(0, currentMinute);
              }
              return [];
            },
            disabledSeconds: (selectedHour: number, selectedMinute: number) => {
              const now = new Date();
              const currentHour = now.getHours();
              const currentMinute = now.getMinutes();
              const currentSecond = now.getSeconds();
              if (selectedHour === currentHour && selectedMinute === currentMinute) {
                return range(0, currentSecond);
              }
              return [];
            },
          });
          
      
     

    return(
        <Space style={{margin: '0 10px'}}>
            <Card
                onClick={showModal}
                type="inner"
                title={Props.month}
                bordered={false}
                style={{ width: 200, padding: 0, textAlign: 'center' }}
                headStyle={{ backgroundColor: 'pink', color: 'white' }}
                bodyStyle={{ padding: 0, margin: 0 }}
            >
                <Title type="secondary" style={{ fontWeight: 'bold', fontSize: 54, padding: 0, margin: 10 }}>{Props.date}</Title>
                <Meta
                    description={<Title type="secondary" level={5} style={{ padding: 0, margin: 10 }}>{Props.day}</Title>}
                />
            </Card>
            <Modal
                title="Title"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
                <DatePicker
                            showTime
                            format="YYYY-MM-DD HH:mm:ss"
                            disabledDate={disabledDate}
                            disabledTime={disabledDateTime}
                            placeholder="Select time"
                        />
            </Modal>
        </Space>
    );
    
   
};

export default DateCard;