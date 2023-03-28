import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DateCard from '../src/components/date-card';
import '@testing-library/jest-dom';

describe('DateCard', () => {
  const props = {
    month: 'January',
    date: '01',
    day: 'Sat',
    index: 0,
    selectedDate: '01-01-2022',
    isHoliday: false,
    dateInput: '',
    handleCardClick: jest.fn(),
    cardStyle: {
      cardWidth: 300,
      cardBackgroundColor: '#fff',
      headerColor: '#000',
      monthColor: '#fff',
      dayColor: '#000',
      dateColor: '#000',
      disabledColor: '#ccc',
      selectedBorder: '1px solid #000',
    },
  };

  it('renders correctly with props', () => {
    const { getByText } = render(<DateCard {...props} />);
    expect(getByText('January')).toBeInTheDocument();
    expect(getByText('01')).toBeInTheDocument();
    expect(getByText('Sat')).toBeInTheDocument();
  });

  it('should call handleCardClick on card click', () => {
    const { getByTestId } = render(<DateCard {...props} />);
    const card = getByTestId('date-card');
    fireEvent.click(card);
    expect(props.handleCardClick).toHaveBeenCalledWith(0);
  });

  /*it('should apply boxShadow style when dateInput matches selectedDate', () => {
    const { getByTestId } = render(<DateCard {...props} />);
    const card = getByTestId('date-card');
    expect(card).not.toHaveStyle('boxShadow: 0 0 5px 2px rgba(200, 200, 200, 0.5)');
    fireEvent.click(card);
    expect(card).toHaveStyle('boxShadow: 0 0 5px 2px rgba(200, 200, 200, 0.5)');
  });*/
  
  
  it('should disable hoverable when isHoliday prop is true', () => {
    const { container } = render(<DateCard {...props} isHoliday={true} />);
    const card = container.firstChild;
    expect(card).not.toHaveClass('ant-card-hoverable');
  });

  it('should render Closed instead of day when isHoliday prop is true', () => {
    const { getByText } = render(<DateCard {...props} isHoliday={true} />);
    expect(getByText('Closed')).toBeInTheDocument();
  });
});
