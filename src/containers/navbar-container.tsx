import { useEffect, useState } from "react";
import { calculateNextMonth } from "@/helpers/calculate-next";
import { calculatePrevMonth } from "@/helpers/calculate-prev";
import Navbar from "@/components/navbar";
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

const NavbarContainer: React.FC<Props> = ({ date, months, handleDrodpownChange, updateMonths, startIndex, handleSetStartIndex, endIndex, handleSetEndIndex }) => {
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
    const todayOptionIndex = options.findIndex((option) => option.value === checkDate);
    let selectedOptionIndex = options.findIndex((option) => option.value === date);
    if (selectedOptionIndex === -1) {
      selectedOptionIndex = todayOptionIndex;
    }
    const updatedOptions = options.map((option, index) =>
      index === todayOptionIndex ? todayOption : option
    );
    setOptions(updatedOptions);
    setSelectedOption(options[selectedOptionIndex]?.value ?? '');
  }, [date, months]);

  const onChangeDropdown = (value: string) => {
    setSelectedOption(value);
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
    } else if (isBottom) {
      const nextMonthDays = calculateNextMonth(months[months.length - 1].month, months[months.length - 1].year);
      const newDays = [...months, ...nextMonthDays];
      updateMonths(newDays);
    }
  };
  return (
    <Navbar options={options} selectedOption={selectedOption} onChangeDropdown={onChangeDropdown} onScrollSelect={onScrollSelect} />
  );
};

export default NavbarContainer;
