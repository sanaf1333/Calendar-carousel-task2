import { Typography, Col, Row, theme } from "antd";
const { Text } = Typography;
import { DownOutlined } from '@ant-design/icons';
import { formatMonth } from "@/helpers/format-date";

interface Props {
  selectedDate: string;
}
const { useToken } = theme;
const today = new Date();
const monthString: string = formatMonth(today);
const CollapseHeader: React.FC<Props> = ({ selectedDate }) => {
  const { token } = useToken();

  if (`${monthString} ${today.getDate()}, ${today.getFullYear()}` === selectedDate) {
    selectedDate = `Today`;
  }
  return (
    <div data-testid="navbar-options">
      <Row style={{ marginBottom: token.marginLG }}>
        <Col span={4} offset={8}>
          <Text strong style={{fontSize: token.fontSizeLG}}>
            Date
          </Text>
        </Col>
        <Col span={4} style={{ textAlign: "end" }}>
          <Text strong style={{fontSize: token.fontSizeLG}}>
            {selectedDate}  {<DownOutlined style={{ color: token.colorPrimary }} />}
          </Text>
        </Col>

      </Row>
    </div>
  );
};

export default CollapseHeader;
