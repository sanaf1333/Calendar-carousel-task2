import React from 'react';
import { render } from '@testing-library/react';
import CollapseHeader from '../src/components/collapse-header';
import '@testing-library/jest-dom';


describe('renders the collapse header component', () => {
  const selectedOption = '23 March, 2022';
  test('renders correctly', () => {
    const { getByTestId } = render(<CollapseHeader selectedDate={selectedOption} />);
    const calendarCarouselElement = getByTestId('navbar-options');
    expect(calendarCarouselElement).toBeInTheDocument();
  });
});





