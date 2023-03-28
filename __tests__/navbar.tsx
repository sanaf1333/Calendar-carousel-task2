import React from 'react';
import { render, fireEvent, screen, queryAllByTestId, getAllByTestId, waitFor } from '@testing-library/react';
import Navbar from '../src/components/navbar';
import '@testing-library/jest-dom';


describe('renders the navbar component', () => {
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];
      const selectedOption = options[0].value;
      const onChangeDropdown = jest.fn();
      const onScrollSelect = jest.fn();
    test('renders correctly', () => {
      const { getByTestId } = render(<Navbar options={options} selectedOption={selectedOption} onChangeDropdown={onChangeDropdown} onScrollSelect={onScrollSelect} />);
      const calendarCarouselElement = getByTestId('navbar-options');
      expect(calendarCarouselElement).toBeInTheDocument();
    });
  });
  

  test('Navbar displays correct option', () => {
    const options = [    { value: 'option1', label: 'Option 1' },    { value: 'option2', label: 'Option 2' },    { value: 'option3', label: 'Option 3' },  ];
    const selectedOption = options[0].value;
    const onChangeDropdown = jest.fn();
    const onScrollSelect = jest.fn();
    const { getByTestId } = render(
      <Navbar
        options={options}
        selectedOption={selectedOption}
        onChangeDropdown={onChangeDropdown}
        onScrollSelect={onScrollSelect}
      />
    );
    const select = getByTestId('navbar-select');
    expect(select).toBeInTheDocument();
    expect(select).toHaveTextContent('Option 1');
  });
  
  
 /* test('Navbar calls onChangeDropdown when option is selected', async () => {
    const options = [    { value: 'option1', label: 'Option 1' },    { value: 'option2', label: 'Option 2' },    { value: 'option3', label: 'Option 3' },  ];
    const selectedOption = options[0].value;
    const onChangeDropdown = jest.fn();
    const onScrollSelect = jest.fn();
    const { getByTestId, debug,getAllByTestId  } = render(
      <Navbar
        options={options}
        selectedOption={selectedOption}
        onChangeDropdown={onChangeDropdown}
        onScrollSelect={onScrollSelect}
      />
    );
    debug();
    const select = getByTestId('navbar-select');
    const option = getByTestId(`${options[1].value}-${1}`);
    if (!option) {
        throw new Error('Option not found!');
      }
    fireEvent.click(select);
    fireEvent.click(option);
    
    expect(onChangeDropdown).toHaveBeenCalledWith(options[1].value);
  });*/
  


  /*test('Navbar calls onScrollSelect when select is scrolled', () => {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 1' },
      { value: 'option5', label: 'Option 2' },
      { value: 'option6', label: 'Option 3' },
      { value: 'option7', label: 'Option 1' },
      { value: 'option8', label: 'Option 2' },
      { value: 'option9', label: 'Option 3' },
      { value: 'option10', label: 'Option 1' },
      { value: 'option21', label: 'Option 2' },
      { value: 'option32', label: 'Option 3' },
      { value: 'option13', label: 'Option 1' },
      { value: 'option24', label: 'Option 2' },
      { value: 'option35', label: 'Option 3' },

    ];
    const selectedOption = options[0].value;
    const onChangeDropdown = jest.fn();
    const onScrollSelect = jest.fn();
    console.log(onScrollSelect.mock.calls);
    const { getByTestId } = render(
      <Navbar options={options} selectedOption={selectedOption} onChangeDropdown={onChangeDropdown} onScrollSelect={onScrollSelect} />
    );
    const select = getByTestId('navbar-select');
    console.log(select);
    fireEvent.scroll(select, { target: { scrollTop: 1 } });
    expect(onScrollSelect).toHaveBeenCalled();
  });
  */