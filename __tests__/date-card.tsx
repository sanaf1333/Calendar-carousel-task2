import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DateCard from '../src/components/date-card';
import { dateCardProps } from '../src/interfaces/date-card-props-interface';
import {defaultDisabledDates} from '../src/data/disabled-dates';
export const defaultProps: dateCardProps = {
    headerColor: '#eb4c34',
    monthColor: 'white',
    dayColor: 'gray',
    dateColor: 'gray',
    cardBackgroundColor: 'white',
    cardWidth: 150,
    disabledColor: 'gray',
    selectedBorder: '1px solid gray',
};
const mockedProps = {
  month: 'January',
  date: '1',
  day: 'Friday',
  year: 2022,
  index: 0,
  selectedDate: 'January 1, 2022',
  onClick: jest.fn(),
  onClickNavbarDate: jest.fn(),
  cardStyle: defaultProps,
  disabledDates: defaultDisabledDates,

};

describe('DateCard component', () => {
  it('renders with the correct date and month', () => {
    render(<DateCard {...mockedProps} />);
    const dateText = screen.getByText('1');
    const monthText = screen.getByText('January');
    expect(dateText).toBeInTheDocument();
    expect(monthText).toBeInTheDocument();
  });

  it('renders the correct day', () => {
    render(<DateCard {...mockedProps} />);
    const dayText = screen.getByText('Friday');
    expect(dayText).toBeInTheDocument();
  });

  it('calls onClick and onClickNavbarDate when clicked', () => {
    render(<DateCard {...mockedProps} />);
    const dateCard = screen.getByTestId('date-card');
    fireEvent.click(dateCard);
    expect(mockedProps.onClick).toHaveBeenCalledTimes(1);
    expect(mockedProps.onClickNavbarDate).toHaveBeenCalledTimes(1);
  });

 /* it('disable the card if it is a holiday', () => {
    const mockedHoliday = { date: '1', month: 'January', year: 2022, name: 'time travel' };
    const mockedDisabledDates = [mockedHoliday];
    render(<DateCard {...mockedProps} disabledDates={mockedDisabledDates} />);
    const dateCard = screen.getByTestId('date-card');
    fireEvent.click(dateCard);
    console.log(dateCard);
    expect(mockedProps.onClick).not.toHaveBeenCalled();
    expect(mockedProps.onClickNavbarDate).not.toHaveBeenCalled();
  });*/

  it('should render Closed instead of day when isHoliday prop is true', () => {
    const mockedHoliday = { date: '1', month: 'January', year: 2022, name: 'time travel' };
    const mockedDisabledDates = [mockedHoliday];
    const { getByText } = render(<DateCard {...mockedProps} disabledDates={mockedDisabledDates} />);
    expect(getByText('Closed')).toBeInTheDocument();
  });
});
