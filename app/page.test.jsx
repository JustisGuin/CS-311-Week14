import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Import userEvent
import Home from 'app/page'; // Adjust the import path as necessary

describe('Main Page', () => {
  test("should display '40'", async () => {
    const events = userEvent.setup();
    render(<Home />);

    //Makes test expect 4040 failing it
    //const numberInput = screen.getByLabelText("The number:");
    //await events.type(numberInput, '40');

    // Trigger the button click
    const button = screen.getByText('Complete:');
    await events.click(button);

    // Now check if the "Your number is:" input displays '40'
    const userNumberInput = screen.getByLabelText("Your number is:");
    expect(userNumberInput.value).toBe('40');
  });
});