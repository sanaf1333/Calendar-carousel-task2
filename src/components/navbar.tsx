import { Layout, Select, Typography } from "antd";
const { Header } = Layout;
const { Title } = Typography;
import { Col, Row } from 'antd';
interface Props {
  options: Array<{ value: string, label: string }>
  selectedOption: string;
  onChangeDropdown: (value: string) => void;
  onScrollSelect: (event: React.UIEvent<HTMLDivElement>) => void;
}

const Navbar: React.FC<Props> = ({ options, selectedOption, onChangeDropdown, onScrollSelect }) => {

  return (
    <Row justify="center" style={{marginBottom: 50}} gutter={300}>
      <Col >
      <Title level={5} style={{  margin: 0 }}>
        Date
      </Title>
      </Col>
      <Col >
      <Select
        value={selectedOption}
        style={{ float:"right",  margin: 0, width: 150, backgroundColor: "white", color: "black" }}
        options={options}
        bordered={false}
        onChange={(value) => { onChangeDropdown(value) }}
        onPopupScroll={onScrollSelect}
      />
      </Col>
    </Row>
  );
};

export default Navbar;
