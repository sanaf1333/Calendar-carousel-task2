import { Select, Typography, Col, Row, theme } from "antd";
const { Title } = Typography;
import { DownOutlined } from '@ant-design/icons';
import { formatDate, formatMonth } from "@/helpers/format-date";

interface Props {
  selectedDate: string;
}
const { useToken } = theme;

const CollapseHeader: React.FC<Props> = ({ selectedDate }) => {
  const { token } = useToken();
  const today = new Date();
  const monthString: string = formatMonth(today);
  if (`${monthString} ${today.getDate()}, ${today.getFullYear()}` === selectedDate) {
    selectedDate = `Today`;
  }
  return (
    <div data-testid="navbar-options">
      <Row style={{ marginBottom: token.marginLG }}>
        <Col span={4} offset={8}>
          <Title level={5}>
            Date
          </Title>
        </Col>
        <Col span={4} style={{ textAlign: "end" }}>
          <Title level={5}>
            {selectedDate}  {<DownOutlined style={{ color: token.colorPrimary }} />}
          </Title>
        </Col>

      </Row>
    </div>
  );
};

export default CollapseHeader;
