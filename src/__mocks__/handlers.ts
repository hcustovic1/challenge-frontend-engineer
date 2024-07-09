import { http, HttpResponse } from 'msw';
import { mockOrder } from '.';

export const handlers = [
  http.get(
    'https://api.prcl.de/orders/:orderNumber',
    ({ params: { orderNumber } }) => {
      if (orderNumber === '1') {
        return HttpResponse.json(mockOrder, {
          status: 200,
          statusText: 'OK',
        });
      }

      return new HttpResponse('Order not found', {
        status: 404,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    }
  ),
];
