import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { OrderProvider } from '../../context/OrderContext';
import { OrderDetailsPage } from './OrderDetailsPage';
import { useManageOrderData } from '../../hooks';
import { mockOrder } from '../../__mocks__';

// Mocking the custom hook
vi.mock('../../hooks', () => ({
  useManageOrderData: vi.fn(),
}));

describe('OrderDetailsPage', () => {
  beforeEach(() => {
    (useManageOrderData as Mock).mockReturnValue({
      isLoadingOrderData: false,
      fetchOrderDataError: null,
      contextOrder: mockOrder,
    });
  });

  it('displays loading state', async () => {
    (useManageOrderData as Mock).mockReturnValue({
      isLoadingOrderData: true,
      fetchOrderDataError: null,
      contextOrder: null,
    });

    render(
      <OrderProvider>
        <MemoryRouter initialEntries={['/order/12345/10001']}>
          <Routes>
            <Route
              path="/order/:orderNumber/:zipCode"
              element={<OrderDetailsPage />}
            />
          </Routes>
        </MemoryRouter>
      </OrderProvider>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('displays error state', async () => {
    const mockError = 'Failed to fetch order data';
    (useManageOrderData as Mock).mockReturnValue({
      isLoadingOrderData: false,
      fetchOrderDataError: mockError,
      contextOrder: null,
    });

    render(
      <OrderProvider>
        <MemoryRouter initialEntries={['/order/12345/10001']}>
          <Routes>
            <Route
              path="/order/:orderNumber/:zipCode"
              element={<OrderDetailsPage />}
            />
          </Routes>
        </MemoryRouter>
      </OrderProvider>
    );

    expect(screen.getByText(mockError)).toBeInTheDocument();
  });

  it('displays no order data state', async () => {
    (useManageOrderData as Mock).mockReturnValue({
      isLoadingOrderData: false,
      fetchOrderDataError: null,
      contextOrder: null,
    });

    render(
      <OrderProvider>
        <MemoryRouter initialEntries={['/order/12345/10001']}>
          <Routes>
            <Route
              path="/order/:orderNumber/:zipCode"
              element={<OrderDetailsPage />}
            />
          </Routes>
        </MemoryRouter>
      </OrderProvider>
    );

    expect(screen.getByText(/no order data available/i)).toBeInTheDocument();
  });

  it('displays order details', async () => {
    render(
      <OrderProvider>
        <MemoryRouter initialEntries={['/order/1/60156']}>
          <Routes>
            <Route
              path="/order/:orderNumber/:zipCode"
              element={<OrderDetailsPage />}
            />
          </Routes>
        </MemoryRouter>
      </OrderProvider>
    );

    expect(screen.getByText(/status/i)).toBeInTheDocument();
    expect(screen.getByText(/articles/i)).toBeInTheDocument();
    expect(screen.getByText(/order information/i)).toBeInTheDocument();
    expect(screen.getByText(/history/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/14 Buck Way/i)).toBeInTheDocument();
    });
  });

  it('displays order details', async () => {
    render(
      <OrderProvider>
        <MemoryRouter initialEntries={['/order/1/60156']}>
          <Routes>
            <Route
              path="/order/:orderNumber/:zipCode"
              element={<OrderDetailsPage />}
            />
          </Routes>
        </MemoryRouter>
      </OrderProvider>
    );

    expect(screen.getByText(/status/i)).toBeInTheDocument();
    expect(screen.getByText(/articles/i)).toBeInTheDocument();
    expect(screen.getByText(/order information/i)).toBeInTheDocument();
    expect(screen.getByText(/history/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Snoop Dogg/i)).toBeInTheDocument();
      expect(screen.getByText(/14 Buck Way/i)).toBeInTheDocument();
    });
  });
});
