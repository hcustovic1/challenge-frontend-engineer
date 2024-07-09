import { describe, it, expect, vi } from 'vitest';
import { fetchOrder } from './fetchOrder';
import { Fetch } from '../types';
import { mockOrder } from '../__mocks__';

describe('fetchOrder', () => {
  it('fetches the order successfully', async () => {
    const mockFetch: Fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockOrder,
    });

    const result = await fetchOrder({
      fetch: mockFetch,
      orderNumber: '1',
      zipCode: '60156',
    });

    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.prcl.dev/orders/1?zip=60156'
    );
    expect(result).toEqual(mockOrder);
  });

  it('throws an error if the fetch fails', async () => {
    const mockFetch: Fetch = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({}),
    });

    await expect(
      fetchOrder({
        fetch: mockFetch,
        orderNumber: '1',
        zipCode: '60156',
      })
    ).rejects.toThrow('Failed to fetch the requested order!');
  });

  it('uses the VITE_ORDERS_API_BASE_URL environment variable if available', async () => {
    const originalEnv = import.meta.env.VITE_ORDERS_API_BASE_URL;
    import.meta.env.VITE_ORDERS_API_BASE_URL = 'https://mock-api.prcl.dev';

    const mockFetch: Fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockOrder,
    });

    const result = await fetchOrder({
      fetch: mockFetch,
      orderNumber: '1',
      zipCode: '60156',
    });

    expect(mockFetch).toHaveBeenCalledWith(
      'https://mock-api.prcl.dev/orders/1?zip=60156'
    );
    expect(result).toEqual(mockOrder);

    // Restore original environment variable
    import.meta.env.VITE_ORDERS_API_BASE_URL = originalEnv;
  });
});
