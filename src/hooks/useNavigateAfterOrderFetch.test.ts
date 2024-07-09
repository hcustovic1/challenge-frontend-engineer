import { act, renderHook, waitFor } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { describe, it, expect, vi, Mock } from 'vitest';
import { useOrderContext } from '../context/OrderContext';
import { useNavigateAfterOrderFetch } from './useNavigateAfterOrderFetch';
import { mockOrder } from '../__mocks__';
import { Order } from '../types';

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}));

vi.mock('../context/OrderContext', () => ({
  useOrderContext: vi.fn(),
}));

describe('useNavigateAfterOrderFetch', () => {
  it('sets the order and navigates when fetchedOrder is provided', async () => {
    const mockSetOrder = vi.fn();
    const mockNavigate = vi.fn();

    (useNavigate as unknown as Mock).mockImplementation(() => mockNavigate);
    (useOrderContext as unknown as Mock).mockImplementation(() => ({
      setOrder: mockSetOrder,
    }));

    const { rerender } = renderHook(
      ({ fetchedOrder }: { fetchedOrder: Order | null }) =>
        useNavigateAfterOrderFetch(fetchedOrder),
      {
        initialProps: { fetchedOrder: mockOrder },
      }
    );

    act(() => {
      rerender({ fetchedOrder: { ...mockOrder } });
    });

    await waitFor(() => {
      expect(mockSetOrder).toHaveBeenCalledWith(mockOrder);
      expect(mockNavigate).toHaveBeenCalledWith(
        `/order/${mockOrder._id}/${mockOrder.zip_code}`
      );
    });
  });

  it('does nothing when fetchedOrder is null', async () => {
    const mockSetOrder = vi.fn();
    const mockNavigate = vi.fn();

    (useNavigate as unknown as Mock).mockImplementation(() => mockNavigate);
    (useOrderContext as unknown as Mock).mockImplementation(() => ({
      setOrder: mockSetOrder,
    }));

    renderHook(() => useNavigateAfterOrderFetch(null));

    await waitFor(() => {
      expect(mockSetOrder).not.toHaveBeenCalled();
      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });
});
