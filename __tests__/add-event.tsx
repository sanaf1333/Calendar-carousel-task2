import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import AddEvent from '../src/components/add-event'
import { defaultTimeOptions } from "../src/data/time-options";
import '@testing-library/jest-dom'


describe('AddEvent', () => {
  const mockOnClickAddEvent = jest.fn();
  const testProps = {
    
    selectedDate: " January 4, 2023",
    availableTimeSlots: [
      { value: '10:00', label: '10:00 AM' },
      { value: '11:00', label: '11:00 AM' },
      { value: '12:00', label: '12:00 PM' }
    ],
    onClickAddEvent: mockOnClickAddEvent
  };

  it('renders the component with default props', async () => {
    const { getByTestId } = render(<AddEvent selectedDate={testProps.selectedDate} />);
    const timeSelect = getByTestId('add-event');

    await waitFor(() => {
      expect(timeSelect).toHaveTextContent('12:00');
    });
    

    const durationText = screen.getByText('00:00');
    expect(durationText).toBeInTheDocument();

    const okButton = screen.getByRole('button', { name: 'OK' });
    expect(okButton).toBeInTheDocument();
  });

  it('renders the component with provided props', () => {
    render(<AddEvent {...testProps} />);
    const timeSelect = screen.getByTestId('add-event');
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveTextContent(testProps.availableTimeSlots[0].value);

    const durationText = screen.getByText('10:00 AM');
    expect(durationText).toBeInTheDocument();

    const okButton = screen.getByRole('button', { name: 'OK' });
    expect(okButton).toBeInTheDocument();
  });

  it('should display the selected time value', async () => {
    const { getByRole, queryAllByText, getByText } = render(<AddEvent availableTimeSlots={testProps.availableTimeSlots} selectedDate={testProps.selectedDate} />);
    const select = getByRole('combobox');
    fireEvent.mouseDown(select);
    const option = getByText('11:00 AM');
    fireEvent.click(option);
    const selectedValues = await waitFor(() => queryAllByText('11:00 AM'));
    const selectedValue = selectedValues[selectedValues.length - 1]; 
    expect(selectedValue.textContent).toEqual('11:00 AM');
  });
  
  
  

  it('should display the default duration value', () => {
    const { getByTestId } = render(<AddEvent availableTimeSlots={testProps.availableTimeSlots} selectedDate={testProps.selectedDate} />);
    expect(getByTestId('duration-value').textContent).toBe('00:00');
  });
  
  it('should increase the duration value when clicking the plus button', () => {
    const { getByTestId } = render(<AddEvent availableTimeSlots={testProps.availableTimeSlots} selectedDate={testProps.selectedDate} />);
    fireEvent.click(getByTestId('duration-increase'));
    expect(getByTestId('duration-value').textContent).toBe('01:00');
  });

  it('should decrease the duration value when clicking the minus button', () => {
    const { getByTestId } = render(<AddEvent availableTimeSlots={testProps.availableTimeSlots} selectedDate={testProps.selectedDate} />);
    fireEvent.click(getByTestId('duration-decrease'));
    expect(getByTestId('duration-value').textContent).toBe('00:00');
  });

  it('should call onClickAddEvent when clicking the OK button', () => {
    const onClickAddEvent = jest.fn();
    const { getByTestId } = render(<AddEvent availableTimeSlots={testProps.availableTimeSlots} selectedDate={testProps.selectedDate} onClickAddEvent={onClickAddEvent} />);
    fireEvent.click(getByTestId('ok-button'));
    expect(onClickAddEvent).toHaveBeenCalled();
  });

});
