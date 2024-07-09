import { useNavigate } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { useOrderContext } from '../context/OrderContext';
import { useFetchOrderFromAPI } from './useFetchOrderFromAPI';
import { useManageOrderData } from './useManageOrderData';
import { renderHook } from '@testing-library/react';
import { mockOrder } from '../__mocks__';

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}));

vi.mock('../context/OrderContext', () => ({
  useOrderContext: vi.fn(),
}));

vi.mock('./useFetchOrderFromAPI', () => ({
  useFetchOrderFromAPI: vi.fn(),
}));

describe('useManageOrderData', () => {
  const mockNavigate = vi.fn();
  const mockSetOrderContext = vi.fn();
  const mockFetchOrderData = vi.fn();

  beforeEach(() => {
    (useNavigate as Mock).mockReturnValue(mockNavigate);
    (useOrderContext as Mock).mockReturnValue({
      order: null,
      setOrder: mockSetOrderContext,
    });
    (useFetchOrderFromAPI as Mock).mockReturnValue({
      fetchOrderData: mockFetchOrderData,
      fetchedOrder: null,
      isLoadingOrderData: false,
      fetchOrderDataError: null,
    });
  });

  it('navigates to home if orderNumber or zipCode is missing', () => {
    renderHook(() => useManageOrderData('', ''));
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('fetches order data if orderNumber and zipCode are provided', () => {
    renderHook(() => useManageOrderData('12345', '54321'));
    expect(mockFetchOrderData).toHaveBeenCalledWith('12345', '54321');
  });

  it('sets context order when fetchedOrder is available', () => {
    (useFetchOrderFromAPI as Mock).mockReturnValue({
      fetchOrderData: mockFetchOrderData,
      fetchedOrder: mockOrder,
      isLoadingOrderData: false,
      fetchOrderDataError: null,
    });

    renderHook(() => useManageOrderData('12345', '54321'));
    expect(mockSetOrderContext).toHaveBeenCalledWith(mockOrder);
  });

  it('returns loading state, error, and context order', () => {
    const { result } = renderHook(() => useManageOrderData('12345', '54321'));
    expect(result.current.isLoadingOrderData).toBe(false);
    expect(result.current.fetchOrderDataError).toBe(null);
    expect(result.current.contextOrder).toBe(null);
  });

  it('returns error state when fetch fails', () => {
    const mockError = 'Failed to fetch order data';
    (useFetchOrderFromAPI as Mock).mockReturnValue({
      fetchOrderData: mockFetchOrderData,
      fetchedOrder: null,
      isLoadingOrderData: false,
      fetchOrderDataError: mockError,
    });

    const { result } = renderHook(() => useManageOrderData('12345', '54321'));
    expect(result.current.isLoadingOrderData).toBe(false);
    expect(result.current.fetchOrderDataError).toBe(mockError);
    expect(result.current.contextOrder).toBe(null);
  });
});
