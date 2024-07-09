import { ReactNode } from 'react';
import { describe, it, expect } from 'vitest';
import { OrderProvider, useOrderContext } from './OrderContext';
import { act, renderHook } from '@testing-library/react';
import { mockOrder } from '../__mocks__';

describe('OrderContext', () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <OrderProvider>{children}</OrderProvider>
  );

  it('should provide initial value as null', () => {
    const { result } = renderHook(() => useOrderContext(), { wrapper });

    expect(result.current.order).toBe(null);
  });

  it('should update the order value', () => {
    const { result } = renderHook(() => useOrderContext(), { wrapper });

    act(() => {
      result.current.setOrder(mockOrder);
    });

    expect(result.current.order).toEqual(mockOrder);
  });

  it('should reset the order value to null', () => {
    const { result } = renderHook(() => useOrderContext(), { wrapper });

    act(() => {
      result.current.setOrder(null);
    });

    expect(result.current.order).toBe(null);
  });

  it('should throw an error if used outside of OrderProvider', () => {
    try {
      renderHook(() => useOrderContext());
      // If no error is thrown, fail the test
      throw new Error('The hook did not throw an error');
    } catch (error) {
      expect((error as Error)?.message).toEqual(
        'useOrderContext must be used within an OrderProvider'
      );
    }
  });
});
