import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import CardCarousel from '../src/components/card-carousel';
import '@testing-library/jest-dom'

describe('CardCarousel component', () => {
    const testProps = {
      onClickNavbarDate: jest.fn(),
      months: [
        { month: 'March', date: 22, year: 2023 },
        { month: 'March', date: 23, year: 2023 },
        { month: 'March', date: 24, year: 2023 },
        { month: 'March', date: 25, year: 2023 },
        { month: 'March', date: 26, year: 2023 },
        { month: 'March', date: 27, year: 2023 },
        { month: 'March', date: 28, year: 2023 },
        { month: 'March', date: 29, year: 2023 },
        { month: 'March', date: 30, year: 2023 },
        { month: 'March', date: 31, year: 2023 },
        {month: 'April', date: 1, year: 2023},
        { month: 'April', date: 2, year: 2023}
        
      ],
      updateMonths: jest.fn(),
      selectedDate: '2022-01-01',
      startIndex: 5,
      handleSetStartIndex: jest.fn(),
      endIndex: 7,
      handleSetEndIndex: jest.fn(),
    };
  
    it('renders without errors', () => {
      render(<CardCarousel {...testProps} />);
    });
  
    it('calls handlePrev when the previous button is clicked', () => {
      const { getByText } = render(<CardCarousel {...testProps} />);
      const prevButton = getByText('<');
      fireEvent.click(prevButton);
      expect(testProps.handleSetStartIndex).toHaveBeenCalledWith(2);
      expect(testProps.handleSetEndIndex).toHaveBeenCalledWith(4);
    });
  
    it('calls handleNext when the next button is clicked', () => {
      const { getByText } = render(<CardCarousel {...testProps} />);
      const nextButton = getByText('>');
      fireEvent.click(nextButton);
      expect(testProps.handleSetStartIndex).toHaveBeenCalledWith(8);
      expect(testProps.handleSetEndIndex).toHaveBeenCalledWith(10);
    });

    it('calls handlePrev when the previous button is clicked and reached the start of month', () => {
        const { getByText } = render(<CardCarousel {...testProps} startIndex={0} endIndex={2} />);
        const prevButton = getByText('<');
        fireEvent.click(prevButton);
        expect(testProps.handleSetStartIndex).toHaveBeenCalledWith(28);
        expect(testProps.handleSetEndIndex).toHaveBeenCalledWith(30);
      });
    
      it('calls handleNext when the next button is clicked and reached the end of month', () => {
        const { getByText } = render(<CardCarousel {...testProps} startIndex={6} endIndex={8} />);
        const nextButton = getByText('>');
        fireEvent.click(nextButton);
        expect(testProps.handleSetStartIndex).toHaveBeenCalledWith(8);
        expect(testProps.handleSetEndIndex).toHaveBeenCalledWith(10);
      });
  
    it('renders the correct number of DateCard components', () => {
      const { getAllByTestId } = render(<CardCarousel {...testProps} />);
      const dateCards = getAllByTestId('date-card');
      expect(dateCards.length).toBe(3); // endIndex - startIndex + 1
    });
  });