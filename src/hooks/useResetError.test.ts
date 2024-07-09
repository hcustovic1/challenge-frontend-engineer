import { act, renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useResetError } from './useResetError';

describe('useResetError', () => {
  it('resets the error to null', async () => {
    const setError = vi.fn();

    const { result } = renderHook(() => useResetError(setError));

    act(() => {
      result.current();
    });

    await waitFor(() => {
      expect(setError).toHaveBeenCalledWith(null);
    });
  });

  it('returns the same function reference on re-renders if setError does not change', async () => {
    const setError = vi.fn();

    const { result, rerender } = renderHook(() => useResetError(setError));

    const initialCallback = result.current;

    rerender();

    await waitFor(() => {
      expect(result.current).toBe(initialCallback);
    });
  });

  it('returns a new function reference if setError changes', async () => {
    const setError1 = vi.fn();
    const setError2 = vi.fn();

    const { result, rerender } = renderHook(
      ({ setError }) => useResetError(setError),
      {
        initialProps: { setError: setError1 },
      }
    );

    const initialCallback = result.current;

    rerender({ setError: setError2 });

    await waitFor(() => {
      expect(result.current).not.toBe(initialCallback);
    });
  });
});
