import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { describe, it, expect, vi, Mock } from 'vitest';
import { OrderProvider } from '../../context/OrderContext';
import { TrackOrderInputPage } from './TrackOrderInputPage';
import '@testing-library/jest-dom';

// Mocking useNavigate from react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe('TrackOrderInputPage', () => {
  it('displays loading, then success, and navigates to order details', async () => {
    const navigate = useNavigate as Mock;
    const mockNavigate = vi.fn();
    navigate.mockReturnValue(mockNavigate);

    render(
      <OrderProvider>
        <BrowserRouter>
          <TrackOrderInputPage />
        </BrowserRouter>
      </OrderProvider>
    );

    fireEvent.change(screen.getByLabelText(/order number/i), {
      target: { value: '1' },
    });
    fireEvent.change(screen.getByLabelText(/zip code/i), {
      target: { value: '60156' },
    });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/order/1/60156');
    });
  });

  it('displays error message on failure', async () => {
    render(
      <OrderProvider>
        <BrowserRouter>
          <TrackOrderInputPage />
        </BrowserRouter>
      </OrderProvider>
    );

    fireEvent.change(screen.getByLabelText(/order number/i), {
      target: { value: 'wrong' },
    });
    fireEvent.change(screen.getByLabelText(/zip code/i), {
      target: { value: 'incorrect' },
    });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByText(
          /Order not found. Please check the order number and zip code and try again./i
        )
      ).toBeInTheDocument();
    });
  });
});
