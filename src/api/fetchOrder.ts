import { Fetch, Order } from '../types';

interface FetchOrderProps {
  fetch: Fetch;
  orderNumber: string;
  zipCode: string;
}

export const fetchOrder = async ({
  fetch,
  orderNumber,
  zipCode,
}: FetchOrderProps): Promise<Order> => {
  const baseUrl =
    import.meta.env.VITE_ORDERS_API_BASE_URL || 'https://api.prcl.de';

  const response = await fetch(
    `${baseUrl}/orders/${orderNumber}?zip=${zipCode}`
  );

  if (!response.ok) {
    throw new Error(
      'Order not found. Please check the order number and zip code and try again.'
    );
  }

  return response.json();
};
