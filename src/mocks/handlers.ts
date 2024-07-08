import { http, HttpResponse } from 'msw';
import orders from './data/orders.json';

export const handlers = [
  http.get(
    'https://api.prcl.dev/orders/:orderNumber',
    ({ request, params: { orderNumber } }) => {
      const url = new URL(request.url);
      const zipCode = url.searchParams.get('zip');

      const order = orders.find(
        (o) => o._id === orderNumber && o.zip_code === zipCode
      );

      if (order) {
        return HttpResponse.json(order, {
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
