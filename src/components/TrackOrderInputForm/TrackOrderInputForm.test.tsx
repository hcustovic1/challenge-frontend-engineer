import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoizedTrackOrderInputForm } from './TrackOrderInputForm';

describe('TrackOrderInputForm', () => {
  it('renders heading and description', () => {
    render(
      <MemoizedTrackOrderInputForm
        heading="Track Your Order"
        description="Please enter your order number and zip code to track your order."
        onSubmit={vi.fn()}
        onInputChange={vi.fn()}
      />
    );

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Track Your Order'
    );
    expect(
      screen.getByText(
        'Please enter your order number and zip code to track your order.'
      )
    ).toBeInTheDocument();
  });

  it('calls onInputChange when input values change', () => {
    const handleInputChange = vi.fn();

    render(
      <MemoizedTrackOrderInputForm
        heading="Track Your Order"
        onSubmit={vi.fn()}
        onInputChange={handleInputChange}
      />
    );

    fireEvent.change(screen.getByLabelText(/order number/i), {
      target: { value: '12345' },
    });
    fireEvent.change(screen.getByLabelText(/zip code/i), {
      target: { value: '67890' },
    });

    expect(handleInputChange).toHaveBeenCalledTimes(2);
  });

  it('enables submit button when form is valid', () => {
    render(
      <MemoizedTrackOrderInputForm
        heading="Track Your Order"
        onSubmit={vi.fn()}
        onInputChange={vi.fn()}
      />
    );

    const orderNumberInput = screen.getByLabelText(/order number/i);
    const zipCodeInput = screen.getByLabelText(/zip code/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    expect(submitButton).toBeDisabled();

    fireEvent.change(orderNumberInput, { target: { value: '12345' } });
    fireEvent.change(zipCodeInput, { target: { value: '67890' } });

    expect(submitButton).toBeEnabled();
  });

  it('calls onSubmit with order number and zip code when form is submitted', () => {
    const handleSubmit = vi.fn();

    render(
      <MemoizedTrackOrderInputForm
        heading="Track Your Order"
        onSubmit={handleSubmit}
        onInputChange={vi.fn()}
      />
    );

    fireEvent.change(screen.getByLabelText(/order number/i), {
      target: { value: '12345' },
    });
    fireEvent.change(screen.getByLabelText(/zip code/i), {
      target: { value: '67890' },
    });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(handleSubmit).toHaveBeenCalledWith('12345', '67890');
  });
});
