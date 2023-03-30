import React from 'react';
import { render, screen } from '@testing-library/react';
import EventCalendarCarousel from '../src/components/event-calendar-carousel';
import '@testing-library/jest-dom'

describe('EventCalendarCarousel', () => {
  it('renders without crashing', () => {
    render(<EventCalendarCarousel />);
    expect(screen.getByTestId('calendar-carousel')).toBeInTheDocument();
  });

  it('displays the collapsed calendar', () => {
    render(<EventCalendarCarousel />);
    expect(screen.getByTestId('collapsed-calendar')).toBeInTheDocument();
  });

  it('displays the add event component', () => {
    render(<EventCalendarCarousel />);
    expect(screen.getByTestId('add-event-component')).toBeInTheDocument();
  });

});
