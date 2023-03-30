import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CollapseHeader from '../src/components/collapse-header';


describe('CollapseHeader', () => {
  const mockedProps = {
    selectedDate: 'March 28, 2023',
  };

  it('renders the component', () => {
    const { getByTestId } = render(<CollapseHeader {...mockedProps} />);
    const navbarOptions = getByTestId('navbar-options');
    expect(navbarOptions).toBeInTheDocument();
  });

  it('displays the selected date in the header', () => {
    const { getByText } = render(<CollapseHeader {...mockedProps} />);
    const selectedDateText = getByText(mockedProps.selectedDate);
    expect(selectedDateText).toBeInTheDocument();
  });

  it('displays "Today" when selected date is current date', () => {
    const today = new Date();
    const formattedToday = `${today.toLocaleString('default', { month: 'long' })} ${today.getDate()}, ${today.getFullYear()}`;
    const { getByText } = render(<CollapseHeader selectedDate={formattedToday} />);
    const todayText = getByText('Today');
    expect(todayText).toBeInTheDocument();
  });
});
