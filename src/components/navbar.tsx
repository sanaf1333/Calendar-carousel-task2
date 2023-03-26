import { Layout, Select, Typography } from "antd";
const { Header } = Layout;
const { Title } = Typography;

interface Props {
    options: Array<{ value: string, label: string }>
    selectedOption: string;
    onChangeDropdown: (value:string) => void;
    onScrollSelect: (event: React.UIEvent<HTMLDivElement>) => void;
}

const Navbar: React.FC<Props> = ({options, selectedOption, onChangeDropdown, onScrollSelect  }) => {
  
  return (
    <Header style={{ backgroundColor: "white" }}>
      <Title level={5} style={{ float: "left", margin: 0 }}>
        Date
      </Title>

      <Select
        value={selectedOption}
        style={{float: "right", margin: 0, width: 200, backgroundColor: "white", color: "black" }}
        options={options}
        bordered={false}
        onChange={(value) => {onChangeDropdown(value)}}
        onPopupScroll={onScrollSelect}
      />
    </Header>
  );
};

export default Navbar;
