import { Select, Typography, Col, Row } from "antd";
const { Title } = Typography;

interface Option {
  value: string;
  label: string;
  key?: string;
}

interface Props {
  options: Option[];
  selectedOption: string;
  onChangeDropdown: (value: string) => void;
  onScrollSelect: (event: React.UIEvent<HTMLDivElement>) => void;
}

const Navbar: React.FC<Props> = ({ options, selectedOption, onChangeDropdown, onScrollSelect }) => {
  console.log(options);
  const modifiedOptions = options.map((option: Option, index: number) => ({ ...option, key: `${option.value}-${index}` }));
  console.log(modifiedOptions);
  return (
    <div data-testid="navbar-options">
      <Row justify="center" style={{marginBottom: 50}} gutter={300}>
        <Col>
          <Title level={5} style={{  margin: 0 }}>
            Date
          </Title>
        </Col>
        <Col>
        <Select
          data-testid="navbar-select"
          value={selectedOption}
          style={{ float:"right",  margin: 0, width: 150, backgroundColor: "white", color: "black" }}
          options={modifiedOptions}
          bordered={false}
          onChange={(value, option) => { onChangeDropdown((option as Option).value) }}
          onPopupScroll={onScrollSelect}
        >
          {modifiedOptions.map((option) => (
            <Select.Option key={option.key} data-value={option.value} data-testid={option.key} >
            {option.label}
          </Select.Option>
          
          ))}
        </Select>

        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
