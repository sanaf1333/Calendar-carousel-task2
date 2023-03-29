import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CalendarCarouselWrapper from '../src/pages/calendar-carousel-API';

describe('CalendarCarouselAPI', () => {
  const mockProps = {
    cardStyle: {
      headerColor: 'red',
      monthColor: 'white',
      dayColor: 'gray',
      dateColor: 'gray',
      cardBackgroundColor: 'white',
      cardWidth: 200,
      disabledColor: 'gray',
      selectedBorder: '1px solid gray',
    },
    cardsInRow: 3,
    selectedDate: '2022-12-31',
    months: [],
    updateMonths: jest.fn(),
    handleDropdownChange: jest.fn(),
    startIndex: 0,
    handleSetStartIndex: jest.fn(),
    endIndex: 2,
    handleSetEndIndex: jest.fn(),
    handleNavbarDateValue: jest.fn(),
    selectedDropdown: 'Today',
    dropdownChanged: false,
    handleSetDropdownChanged: jest.fn(),
  };

  test('renders NavbarContainer', () => {
    render(<CalendarCarouselWrapper {...mockProps} />);
    const navbarContainerElement = screen.getByTestId('navbar-container');
    expect(navbarContainerElement).toBeInTheDocument();
  });

  test('renders CardCarouselContainer', () => {
    render(<CalendarCarouselWrapper {...mockProps} />);
    const cardCarouselContainerElement = screen.getByTestId('card-carousel-container');
    expect(cardCarouselContainerElement).toBeInTheDocument();
  });
});
