import { useEffect, useState } from "react";
import { Layout, Select, Typography } from "antd";

const { Header } = Layout;
const { Title } = Typography;

interface Props {
  date: string;
  months: any[];
}

const Navbar: React.FC<Props> = ({ date, months }) => {
  const [selectedOption, setSelectedOption] = useState<string>(date);
  const [options, setOptions] = useState<any[]>([]);

  useEffect(() => {
    const today: Date = new Date();
    const month: string = new Intl.DateTimeFormat("en-US", { month: "long" }).format(today);
    const checkDate = `${month} ${today.getDate()}, ${today.getFullYear()}`;
    const todayOption = {
      value: checkDate,
      label: "Today",
    };
    const options = months.map((month) => ({
      value: `${month.month} ${month.date}, ${month.year}`,
      label: `${month.month} ${month.date}, ${month.year}`,
    }));
    // find the index of the option that matches today's date
    const todayOptionIndex = options.findIndex((option) => option.value === checkDate);
    // Find the index of the option that matches the date prop
    let selectedOptionIndex = options.findIndex((option) => option.value === date);
    // If the date prop is not found, default to today's date
    if (selectedOptionIndex === -1) {
      selectedOptionIndex = todayOptionIndex;
    }
    // create a new options array with "Today" as the label for the matching option
    const updatedOptions = options.map((option, index) =>
      index === todayOptionIndex ? todayOption : option
    );
    setOptions(updatedOptions);
    setSelectedOption(options[selectedOptionIndex]?.value ?? '');
  }, [date, months]);

  return (
    <Header style={{ backgroundColor: "gray" }}>
      <Title level={3} style={{ float: "left", margin: 0 }}>
        Date
      </Title>
      <Title level={3} style={{ float: "right", margin: 0 }}>
        {selectedOption === options[0]?.value ? "Today" : selectedOption}
      </Title>
      <Select
        value={selectedOption}
        style={{ width: 200, backgroundColor: "white", color: "black" }}
        options={options}
        bordered={false}
        onChange={(value) => {
          setSelectedOption(value);
        }}
      />
    </Header>
  );
};

export default Navbar;
