import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavbarContainer from '../src/containers/navbar-container';
import { debug } from 'webpack';

describe('NavbarContainer compoennt renders without crashing', () => {
    it('should render without error', () => {
      const props = {
        date: 'March 27, 2023',
        months: [],
        updateMonths: jest.fn(),
        handleDrodpownChange: jest.fn(),
        startIndex: 0,
        handleSetStartIndex: jest.fn(),
        endIndex: 0,
        handleSetEndIndex: jest.fn(),
      };
      render(<NavbarContainer {...props} />);
    });
  });


  /*test('NavbarContainer displays correct number of options', () => {
    const months = [
      { month: 'January', date: 1, year: 2022 },
      { month: 'February', date: 1, year: 2022 },
      { month: 'March', date: 1, year: 2022 }
    ];
    const props = {
        date: 'January 1, 2022',
        months: [],
        updateMonths: jest.fn(),
        handleDrodpownChange: jest.fn(),
        startIndex: 0,
        handleSetStartIndex: jest.fn(),
        endIndex: 0,
        handleSetEndIndex: jest.fn(),
      };
    const { getByTestId } = render(<NavbarContainer {...props} months={months} />);
    const options = getByTestId('navbar-select').children;
    
    console.log(options.item);
    console.log(months);
    expect(options.length).toBe(months.length);
  });*/
  
  test('NavbarContainer displays correct selected option', () => {
    const months = [
      { month: 'January', date: 1, year: 2022 },
      { month: 'February', date: 1, year: 2022 },
      { month: 'March', date: 1, year: 2022 }
    ];
    const props = {
        date: 'January 1, 2022',
        months: [],
        updateMonths: jest.fn(),
        handleDrodpownChange: jest.fn(),
        startIndex: 0,
        handleSetStartIndex: jest.fn(),
        endIndex: 0,
        handleSetEndIndex: jest.fn(),
      };
    const { getByTestId } = render(<NavbarContainer {...props} months={months} />);
    const selectedOption = getByTestId('navbar-container');
    expect(selectedOption.textContent).toBe('DateJanuary 1, 2022');
  });
  

  /*test('NavbarContainer calls handleDrodpownChange when new option is selected', () => {
    const handleDropdownChange = jest.fn();
    const months = [
      { month: 'January', date: 1, year: 2022 },
      { month: 'February', date: 1, year: 2022 },
      { month: 'March', date: 1, year: 2022 }
    ];
    const props = {
      date: 'January 1, 2022',
      months: [],
      updateMonths: jest.fn(),
      handleDrodpownChange: jest.fn(),
      startIndex: 0,
      handleSetStartIndex: jest.fn(),
      endIndex: 0,
      handleSetEndIndex: jest.fn(),
    };
    const { getByTestId } = render(<NavbarContainer {...props} months={months} handleDrodpownChange={handleDropdownChange} />);
    const dropdown = getByTestId('navbar-select');
    fireEvent.click(dropdown[1]);
    expect(handleDropdownChange).toHaveBeenCalledWith('February 1, 2022');
  });*/
  
  

  /*test('NavbarContainer calls updateMonths, handleSetStartIndex, and handleSetEndIndex when scrolled to top', () => {
    const updateMonths = jest.fn();
    const handleSetStartIndex = jest.fn();
    const handleSetEndIndex = jest.fn();
    const months = [
      { month: 'January', date: 1, year: 2022 },
      { month: 'January', date: 2, year: 2022 },
      { month: 'January', date: 3, year: 2022 }
    ];
    const props = {
        date: 'January 1, 2022',
        months: [],
        updateMonths: jest.fn(),
        handleDrodpownChange: jest.fn(),
        startIndex: 0,
        handleSetStartIndex: jest.fn(),
        endIndex: 0,
        handleSetEndIndex: jest.fn(),
      };
    const { getByTestId } = render(<NavbarContainer {...props} months={months} updateMonths={updateMonths} handleSetStartIndex={handleSetStartIndex} handleSetEndIndex={handleSetEndIndex} />);
    const navbarContainer = getByTestId('navbar-container');
    Object.defineProperty(navbarContainer, 'scrollTop', { value: 0 });
    fireEvent.scroll(navbarContainer);
    expect(handleSetStartIndex).toHaveBeenCalledWith(0);
    expect(handleSetEndIndex).toHaveBeenCalledWith(2);
    });*/