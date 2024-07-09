import { useState, useCallback } from 'react';
import { Order } from '../types';
import { fetchOrder } from '../api/fetchOrder';

interface UseFetchOrderReturn {
  fetchedOrder: Order | null;
  fetchOrderDataError: string | null;
  isLoadingOrderData: boolean;
  fetchOrderData: (orderNumber: string, zipCode: string) => void;
  setFetchOrderDataError: (error: string | null) => void;
}

export const useFetchOrder = (): UseFetchOrderReturn => {
  const [order, setOrder] = useState<Order | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchOrderData = useCallback(
    async (orderNumber: string, zipCode: string) => {
      setIsLoading(true);
      setError(null);

      try {
        const orderData = await fetchOrder({ fetch, orderNumber, zipCode });
        setOrder(orderData);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return {
    fetchedOrder: order,
    fetchOrderDataError: error,
    isLoadingOrderData: isLoading,
    fetchOrderData,
    setFetchOrderDataError: setError,
  };
};
