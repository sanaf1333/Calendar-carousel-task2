import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

describe('renders the CalendarCarousel component', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<App />);
    const calendarCarouselElement = getByTestId('calendar-carousel');
    expect(calendarCarouselElement).toBeInTheDocument();
  });
});
