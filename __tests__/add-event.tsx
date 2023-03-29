import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import AddEvent from '../src/components/add-event'
import { defaultTimeOptions } from "../src/data/time-options";
import '@testing-library/jest-dom'


describe('AddEvent', () => {
  const mockOnClickAddEvent = jest.fn();
  const testProps = {
    month: 'January',
    date: '01',
    year: 2023,
    availableTimeSlots: [
      { value: '10:00', label: '10:00 AM' },
      { value: '11:00', label: '11:00 AM' },
      { value: '12:00', label: '12:00 PM' }
    ],
    onClickAddEvent: mockOnClickAddEvent
  };

  it('renders the component with default props', async () => {
    const { getByTestId } = render(<AddEvent availableTimeSlots={testProps.availableTimeSlots} />);
    const timeSelect = getByTestId('add-event');
  
    await waitFor(() => {
      expect(timeSelect).toHaveValue(testProps.availableTimeSlots[0].label);
    });
    console.log(timeSelect);
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveValue(testProps.availableTimeSlots[0].value);

    const durationText = screen.getByText('00:00');
    expect(durationText).toBeInTheDocument();

    const okButton = screen.getByRole('button', { name: 'OK' });
    expect(okButton).toBeInTheDocument();
  });

  it('renders the component with provided props', () => {
    render(<AddEvent {...testProps} />);
    const timeSelect = screen.getByTestId('add-event');
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveValue(testProps.availableTimeSlots[0].value);

    const durationText = screen.getByText('00:00');
    expect(durationText).toBeInTheDocument();

    const okButton = screen.getByRole('button', { name: 'OK' });
    expect(okButton).toBeInTheDocument();
  });

});
