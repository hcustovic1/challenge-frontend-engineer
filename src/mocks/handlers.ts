import { http, HttpResponse } from 'msw';
import ordersJson from './data/orders.json';
import { Order } from '../types/Orders';

const orders: Order[] = ordersJson as Order[];

export const handlers = [
  http.get(
    'https://api.prcl.dev/orders/:orderNumber',
    ({ request, params: { orderNumber } }) => {
      const url = new URL(request.url);
      const zipCode = url.searchParams.get('zip');

      const requestedOrder = orders.find(
        (order) => order._id === orderNumber && order.zip_code === zipCode
      );

      if (requestedOrder) {
        return HttpResponse.json(requestedOrder, {
          status: 200,
          statusText: 'OK',
        });
      } else {
        return new HttpResponse('Order not found', {
          status: 404,
          headers: {
            'Content-Type': 'text/plain',
          },
        });
      }
    }
  ),
];
