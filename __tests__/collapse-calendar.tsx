import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CollapsedCalendar from '../src/components/collapse-calendar';
import { dateCardProps } from '../src/interfaces/date-card-props-interface';
import { defaultDisabledDates } from '../src/data/disabled-dates';
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
describe('CollapsedCalendar component', () => {
  const mockedProps = {
    selectedDate: '2023-03-30',
    cardStyle: defaultProps,
    months: [],
    updateMonths: jest.fn(),
    startIndex: 0,
    handleSetStartIndex: jest.fn(),
    endIndex: 6,
    handleSetEndIndex: jest.fn(),
    handleNavbarDateValue: jest.fn(),
    availableTimeSlots: [{ value: '08:00', label: '8:00 AM' }, { value: '09:00', label: '9:00 AM' }],
    cardsInRow: 3,
    disabledDates: defaultDisabledDates,
  };

  it('renders without crashing', () => {
    render(<CollapsedCalendar {...mockedProps} />);
  });

});
