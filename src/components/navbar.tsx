import { useEffect, useState } from "react";
import { Layout, Select, Typography } from "antd";
import SpinFC from "antd/es/spin";
import { calculateNextMonth } from "../helpers/calculate-next";
import { calculatePrevMonth } from "../helpers/calculate-prev";
const { Header } = Layout;
const { Title } = Typography;

interface Props {
  date: string;
  months: any[];
  updateMonths: (updatedMonths: any[]) => void;
  handleDrodpownChange: (value: string) => void;
  startIndex: number;
    handleSetStartIndex: (value: number) => void;
    endIndex: number;
    handleSetEndIndex: (value: number) => void;
}

const Navbar: React.FC<Props> = ({ date, months, handleDrodpownChange, updateMonths, startIndex, handleSetStartIndex, endIndex, handleSetEndIndex }) => {
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

  const onChangeDropdown = (value:string)=>{
    setSelectedOption(value);
    console.log("3");
    handleDrodpownChange(value);
    
  }

  const onScrollSelect = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const isTop = target.scrollTop === 0;
    const isBottom = target.scrollHeight - target.scrollTop === target.clientHeight;
  
    if (isTop) {
      const prevMonthDays = calculatePrevMonth(months[0].month, months[0].year);
      const newDays = [...prevMonthDays, ...months];
      updateMonths(newDays);
      let newStartIndex = startIndex + prevMonthDays.length;
      let newEndIndex = endIndex + prevMonthDays.length;
      handleSetStartIndex(newStartIndex);
      handleSetEndIndex(newEndIndex);
      console.log("Scrolled to the top!");
    } else if (isBottom) {
      const nextMonthDays = calculateNextMonth(months[months.length-1].month, months[months.length-1].year);
      const newDays = [...months, ...nextMonthDays];
      updateMonths(newDays);
      console.log("Scrolled to the bottom!");
    } else {
      // call function for scrolling in between
      console.log("Scrolling in between!");
    }
  };
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
