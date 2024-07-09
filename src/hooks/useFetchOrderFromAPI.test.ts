import { describe, it, expect, vi, Mock } from 'vitest';
import { useFetchOrderFromAPI } from './useFetchOrderFromAPI';
import { fetchOrder } from '../api/fetchOrder';
import { act, renderHook, waitFor } from '@testing-library/react';
import { mockOrder } from '../__mocks__';

vi.mock('../api/fetchOrder');

describe('useFetchOrderFromAPI', () => {
  it('fetches order data successfully', async () => {
    (fetchOrder as Mock).mockResolvedValue(mockOrder);

    const { result } = renderHook(() => useFetchOrderFromAPI());

    act(() => {
      result.current.fetchOrderData('1', '60156');
    });

    expect(result.current.isLoadingOrderData).toBe(true);
    expect(result.current.fetchOrderDataError).toBe(null);

    await waitFor(() => {
      expect(result.current.isLoadingOrderData).toBe(false);
    });

    expect(result.current.fetchOrderDataError).toBe(null);
    expect(result.current.fetchedOrder).toEqual(mockOrder);
  });

  it('handles fetch order data error', async () => {
    const mockError = new Error('Failed to fetch order');
    (fetchOrder as Mock).mockRejectedValue(mockError);

    const { result } = renderHook(() => useFetchOrderFromAPI());

    act(() => {
      result.current.fetchOrderData('1', '60156');
    });

    expect(result.current.isLoadingOrderData).toBe(true);
    expect(result.current.fetchOrderDataError).toBe(null);

    await waitFor(() => {
      expect(result.current.isLoadingOrderData).toBe(false);
    });

    expect(result.current.fetchOrderDataError).toBe(mockError.message);
    expect(result.current.fetchedOrder).toBe(null);
  });

  it('allows setting fetch order data error manually', () => {
    const { result } = renderHook(() => useFetchOrderFromAPI());

    act(() => {
      result.current.setFetchOrderDataError('Custom error message');
    });

    expect(result.current.fetchOrderDataError).toBe('Custom error message');
  });
});
