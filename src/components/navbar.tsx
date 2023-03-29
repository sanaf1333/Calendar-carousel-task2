import { Select, Typography, Col, Row, theme } from "antd";
const { Title } = Typography;
import { DownOutlined } from '@ant-design/icons';

interface Props {
  selectedDate: string;
}
const { useToken } = theme;
//if selected date = todays date, show today
const Navbar: React.FC<Props> = ({ selectedDate }) => {
  const { token } = useToken();
  const today = new Date();
  const monthString: string = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(today);
  if(`${monthString} ${today.getDate()}, ${today.getFullYear()}` === selectedDate){
    selectedDate=`Today`;
  }
  return (
    <div data-testid="navbar-options">
      <Row style={{ marginBottom: "16px" }}>
        <Col span={4} offset={8}>
          <Title level={5}>
            Date
          </Title>
        </Col>
        <Col span={4} style={{textAlign: "end"}}>
          <Title level={5}>
            {selectedDate}  {<DownOutlined style={{ color: token.colorPrimary}} />}   
          </Title>
        </Col>
       
      </Row>
    </div>
  );
};

export default Navbar;
